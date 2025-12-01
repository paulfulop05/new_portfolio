import { useState, useEffect } from "react";
import { GitCommit, ExternalLink } from "lucide-react";

interface Commit {
  sha: string;
  message: string;
  repo: string;
  url: string;
  additions: number;
  deletions: number;
  date: string;
}

const RecentCommits = () => {
  const [mainCommits, setMainCommits] = useState<Commit[]>([]);
  const [studentCommits, setStudentCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  const accounts = {
    main: {
      username: "paulfulop05",
    },
    student: {
      username: "PaulFulop",
    },
  };

  useEffect(() => {
    const fetchCommitsForAccount = async (
      username: string
    ): Promise<Commit[]> => {
      try {
        // Fetch user's public events only (client-safe, no authentication needed)
        const eventsRes = await fetch(
          `https://api.github.com/users/${username}/events/public?per_page=100`
        );

        if (!eventsRes.ok) {
          console.error(
            `Failed to fetch events for ${username}:`,
            eventsRes.status,
            eventsRes.statusText
          );
          return [];
        }

        const events = await eventsRes.json();

        // Filter push events and extract commits
        const pushEvents = events.filter(
          (event: any) => event.type === "PushEvent"
        );

        const recentCommits: Commit[] = [];

        for (const event of pushEvents) {
          if (recentCommits.length >= 2) break;

          const [owner, repo] = event.repo.name.split("/");

          // If no commits in payload, fetch from repo directly
          if (!event.payload.commits || event.payload.commits.length === 0) {
            try {
              // Fetch latest commits from the repository
              const repoCommitsRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`
              );

              if (!repoCommitsRes.ok) {
                continue;
              }

              const repoCommits = await repoCommitsRes.json();
              if (repoCommits.length === 0) continue;

              const latestCommit = repoCommits[0];

              // Fetch full commit details to get stats
              const fullCommitRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits/${latestCommit.sha}`
              );

              let additions = 0;
              let deletions = 0;

              if (fullCommitRes.ok) {
                const fullCommit = await fullCommitRes.json();
                additions = fullCommit.stats?.additions || 0;
                deletions = fullCommit.stats?.deletions || 0;
              }

              recentCommits.push({
                sha: latestCommit.sha.substring(0, 7),
                message: latestCommit.commit.message.split("\n")[0],
                repo: event.repo.name,
                url: latestCommit.html_url,
                additions,
                deletions,
                date: latestCommit.commit.author.date,
              });

              continue;
            } catch (err) {
              console.error(
                `Error fetching from repo ${event.repo.name}:`,
                err
              );
              continue;
            }
          }

          const commits = event.payload.commits || [];

          // Get the first commit from this push event
          const commit = commits[0];

          try {
            const commitRes = await fetch(
              `https://api.github.com/repos/${owner}/${repo}/commits/${commit.sha}`
            );

            if (!commitRes.ok) {
              console.error(
                `Failed to fetch commit details for ${commit.sha.substring(
                  0,
                  7
                )} (status ${commitRes.status})`
              );

              // Fallback: use basic commit info without stats
              recentCommits.push({
                sha: commit.sha.substring(0, 7),
                message: commit.message.split("\n")[0],
                repo: event.repo.name,
                url: `https://github.com/${owner}/${repo}/commit/${commit.sha}`,
                additions: 0,
                deletions: 0,
                date: event.created_at,
              });
              continue;
            }

            const commitData = await commitRes.json();

            recentCommits.push({
              sha: commit.sha.substring(0, 7),
              message: commit.message.split("\n")[0],
              repo: event.repo.name,
              url: `https://github.com/${owner}/${repo}/commit/${commit.sha}`,
              additions: commitData.stats?.additions || 0,
              deletions: commitData.stats?.deletions || 0,
              date: event.created_at,
            });
          } catch (err) {
            console.error(
              `Error processing commit ${commit.sha.substring(0, 7)}:`,
              err
            );
            // Still add the commit even if we can't get stats
            recentCommits.push({
              sha: commit.sha.substring(0, 7),
              message: commit.message.split("\n")[0],
              repo: event.repo.name,
              url: `https://github.com/${owner}/${repo}/commit/${commit.sha}`,
              additions: 0,
              deletions: 0,
              date: event.created_at,
            });
          }
        }

        return recentCommits;
      } catch (error) {
        console.error(`Error fetching commits for ${username}:`, error);
        return [];
      }
    };

    const fetchAllCommits = async () => {
      setLoading(true);
      try {
        const [main, student] = await Promise.all([
          fetchCommitsForAccount(accounts.main.username),
          fetchCommitsForAccount(accounts.student.username),
        ]);
        setMainCommits(main);
        setStudentCommits(student);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCommits();

    // Refresh commits every 5 minutes
    const interval = setInterval(fetchAllCommits, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-border rounded-lg bg-card/50 p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <GitCommit className="w-4 h-4 text-primary" />
          Recent Commits
        </h3>
        <a
          href={`https://github.com/${accounts.main.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          [info]
        </a>
      </div>

      {/* Commits List */}
      <div className="space-y-6">
        {loading ? (
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-3 bg-border rounded w-3/4 mb-1"></div>
                <div className="h-2 bg-border rounded w-1/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Main Account Section - Always visible */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-3 bg-primary rounded"></div>
                <p className="text-xs font-semibold text-primary">
                  Main Account (@{accounts.main.username})
                </p>
              </div>
              <div className="space-y-2">
                {mainCommits.length > 0 ? (
                  mainCommits.map((commit, index) => (
                    <a
                      key={index}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group hover:opacity-80 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs text-foreground group-hover:text-primary transition-colors line-clamp-1 flex-1">
                          <span className="font-medium">
                            {commit.repo.split("/")[1]}:
                          </span>{" "}
                          {commit.message}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                        <span className="text-green-400">
                          +{commit.additions}
                        </span>
                        <span className="text-red-400">
                          -{commit.deletions}
                        </span>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="text-xs text-muted-foreground py-2">
                    No recent commits
                  </p>
                )}
              </div>
            </div>

            {/* Student Account Section - Always visible */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-3 bg-primary rounded"></div>
                <p className="text-xs font-semibold text-primary">
                  Student Account (@{accounts.student.username})
                </p>
              </div>
              <div className="space-y-2">
                {studentCommits.length > 0 ? (
                  studentCommits.map((commit, index) => (
                    <a
                      key={index}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group hover:opacity-80 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs text-foreground group-hover:text-primary transition-colors line-clamp-1 flex-1">
                          <span className="font-medium">
                            {commit.repo.split("/")[1]}:
                          </span>{" "}
                          {commit.message}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                        <span className="text-green-400">
                          +{commit.additions}
                        </span>
                        <span className="text-red-400">
                          -{commit.deletions}
                        </span>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="text-xs text-muted-foreground py-2">
                    No recent commits
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecentCommits;
