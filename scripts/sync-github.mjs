import { writeFileSync } from "node:fs";

const USER = "mahi-chan";
const headers = { Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const get = async (path) => {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json();
};

const [user, all] = await Promise.all([
  get(`/users/${USER}`),
  get(`/users/${USER}/repos?per_page=100&type=owner&sort=pushed`),
]);

// shortcut: first 100 repos only, paginate if you ever exceed that
const repos = all.filter((r) => !r.fork && !r.archived && r.name !== `${USER}.github.io`);

const counts = {};
for (const r of repos) if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1;
const total = Object.values(counts).reduce((a, b) => a + b, 0);
const topLanguages = Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 6)
  .map(([name, n]) => ({ name, pct: Math.round((n / total) * 100) }));

const projects = repos.slice(0, 6).map((r, i) => ({
  name: r.name,
  description: r.description ?? "",
  language: r.language,
  stars: r.stargazers_count,
  forks: r.forks_count,
  topics: r.topics ?? [],
  repoUrl: r.html_url,
  homepage: r.homepage || null,
  featured: i < 3,
}));

const stats = {
  repos: user.public_repos,
  stars: repos.reduce((a, r) => a + r.stargazers_count, 0),
  followers: user.followers,
  following: user.following,
  joined: String(new Date(user.created_at).getFullYear()),
};

const topicCounts = {};
for (const r of repos) for (const t of r.topics ?? []) topicCounts[t] = (topicCounts[t] ?? 0) + 1;
const topTopics = Object.entries(topicCounts).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([t]) => t);

const langNames = topLanguages.map((l) => l.name);
const skills = [{ category: "Languages", items: langNames }];
if (topTopics.length) skills.push({ category: "Topics", items: topTopics });

const highlights = [
  { label: "Main language", value: langNames[0] ?? "—" },
  { label: "Public repos", value: String(stats.repos) },
  ...(user.location ? [{ label: "Based in", value: user.location }] : []),
  { label: "Stars earned", value: String(stats.stars) },
];

// empty bio/location are omitted so profile.ts keeps its hand-written fallback
const out = {
  projects, topLanguages, stats, skills, highlights,
  marquee: [...langNames, ...topTopics],
  ...(user.bio && { tagline: user.bio }),
  ...(user.location && { location: user.location }),
};
writeFileSync("src/data/github.json", JSON.stringify(out, null, 2) + "\n");
console.log(`synced ${projects.length} projects, ${stats.repos} repos`);
