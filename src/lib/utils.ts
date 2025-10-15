import type {
  GitHubActivity,
  GitHubCommit,
  GitHubContributor,
  GitHubEvents,
  GitHubOverview,
  GitHubProfile,
  GitHubRepository,
  GitHubStats,
} from '../types/Github/Github';
import type {
  ActivityMetric,
  CommitSummary,
  ContributionsData,
  LanguageMetricsResponse,
  MetricsSummary,
  ProductivityMetrics,
  RepositoryContribution,
  RepositoryMetric,
  RepositorySummary,
  StreakMetrics,
  TechnologiesData,
  TimelineEvent,
  TimelineMetrics,
} from '../types/Metrics/Metrics';
import type { Project } from '../types/Projects/Projects';

// --------------- helpers ---------------

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null;

const get = (
  obj: Record<string, unknown> | undefined,
  ...keys: string[]
): unknown => {
  if (!obj) return undefined;
  for (const k of keys) {
    if (k in obj && obj[k] !== undefined) return obj[k];
  }
  return undefined;
};

const num = (v: unknown, fallback = 0): number =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback;

const str = (v: unknown, fallback = ''): string =>
  typeof v === 'string' ? v : fallback;

const bool = (v: unknown, fallback = false): boolean =>
  typeof v === 'boolean' ? v : fallback;

const strArr = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [];

const isoStr = (v: unknown): string => (typeof v === 'string' ? v : '');

const dateOrIso = (v: unknown): Date =>
  v instanceof Date ? v : new Date(isoStr(v));

export function unwrapData<T>(response: unknown): T {
  if (isObject(response) && 'data' in response) {
    return (response as Record<string, unknown>).data as T;
  }
  return response as T;
}

// --------------- GitHub normalizers ---------------

export function normalizeGitHubProfile(input: unknown): GitHubProfile {
  const raw = unwrapData<Record<string, unknown>>(input);
  return {
    login: str(get(raw, 'login')),
    name: str(get(raw, 'name'), null as unknown as string) ?? null,
    bio: str(get(raw, 'bio'), null as unknown as string) ?? null,
    avatar_url: str(get(raw, 'avatar_url', 'avatarUrl')),
    location: str(get(raw, 'location'), null as unknown as string) ?? null,
    email: str(get(raw, 'email'), null as unknown as string) ?? null,
    company: str(get(raw, 'company'), null as unknown as string) ?? null,
    blog: str(get(raw, 'blog'), null as unknown as string) ?? null,
    twitter_username:
      str(
        get(raw, 'twitter_username', 'twitterUsername'),
        null as unknown as string
      ) ?? null,
    public_repos: num(get(raw, 'public_repos', 'publicRepos')),
    public_gists: num(get(raw, 'public_gists', 'publicGists')),
    followers: num(get(raw, 'followers')),
    following: num(get(raw, 'following')),
    created_at: isoStr(get(raw, 'created_at', 'createdAt')),
    updated_at: isoStr(get(raw, 'updated_at', 'updatedAt')),
  };
}

export function normalizeGitHubRepositories(input: unknown): GitHubRepository {
  const raw = input as Record<string, unknown>;
  return {
    id: num(get(raw, 'id')),
    name: str(get(raw, 'name')),
    full_name: str(get(raw, 'full_name', 'fullName')),
    description: ((): string | null => {
      const v = get(raw, 'description');
      return typeof v === 'string' ? v : null;
    })(),
    language: ((): string | null | undefined => {
      const v = get(raw, 'language');
      return typeof v === 'string' || v == null ? v : undefined;
    })(),
    stargazers_count: ((): number | undefined => {
      const v = get(raw, 'stargazers_count', 'stargazersCount');
      return typeof v === 'number' ? v : undefined;
    })(),
    forks_count: ((): number | undefined => {
      const v = get(raw, 'forks_count', 'forksCount');
      return typeof v === 'number' ? v : undefined;
    })(),
    size: ((): number | undefined => {
      const v = get(raw, 'size');
      return typeof v === 'number' ? v : undefined;
    })(),
    created_at: ((): string | null | undefined => {
      const v = get(raw, 'created_at', 'createdAt');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    updated_at: ((): string | null | undefined => {
      const v = get(raw, 'updated_at', 'updatedAt');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    pushed_at: ((): string | null | undefined => {
      const v = get(raw, 'pushed_at', 'pushedAt');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    html_url: ((): string | null | undefined => {
      const v = get(raw, 'html_url', 'htmlUrl');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    clone_url: ((): string | null | undefined => {
      const v = get(raw, 'clone_url', 'cloneUrl');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    topics: ((): string[] | undefined => {
      const v = get(raw, 'topics');
      return Array.isArray(v)
        ? v.filter((x) => typeof x === 'string')
        : undefined;
    })(),
    is_private: bool(get(raw, 'is_private', 'private')),
  };
}

export function normalizeGitHubCommit(input: unknown): GitHubCommit {
  const raw = input as Record<string, unknown>;
  const author = get(raw, 'author') as Record<string, unknown> | undefined;
  const repo = get(raw, 'repository', 'repo') as
    | Record<string, unknown>
    | undefined;
  return {
    sha: str(get(raw, 'sha')),
    message: str(get(raw, 'message')),
    author: {
      name: str(get(author, 'name')),
      email: str(get(author, 'email')),
      date: isoStr(get(author, 'date')),
    },
    repository: {
      name: str(get(repo, 'name')),
      full_name: str(get(repo, 'full_name', 'fullName')),
    },
  };
}

export function normalizeGitHubStats(input: unknown): GitHubStats {
  const raw = unwrapData<Record<string, unknown>>(input);
  const recent = get(raw, 'recentActivity') as
    | Record<string, unknown>
    | undefined;
  return {
    totalRepos: num(get(raw, 'totalRepos', 'total_repos')),
    totalStars: num(get(raw, 'totalStars', 'total_stars')),
    totalForks: num(get(raw, 'totalForks', 'total_forks')),
    languages: ((): { [language: string]: number } => {
      const v = get(raw, 'languages');
      if (isObject(v)) {
        return Object.fromEntries(
          Object.entries(v).map(([k, val]) => [
            k,
            typeof val === 'number' ? val : 0,
          ])
        );
      }
      return {};
    })(),
    recentActivity: {
      activeReposThisWeek: num(get(recent, 'activeReposThisWeek')),
      activeReposThisMonth: num(get(recent, 'activeReposThisMonth')),
    },
  };
}

export function normalizeGitHubActivities(input: unknown): GitHubActivity {
  const raw = input as Record<string, unknown>;
  const actor = get(raw, 'actor') as Record<string, unknown> | undefined;
  const repo = get(raw, 'repo') as Record<string, unknown> | undefined;
  return {
    id: str(get(raw, 'id')),
    type: str(get(raw, 'type')),
    actor: {
      login: str(get(actor, 'login')),
      avatar_url: str(get(actor, 'avatar_url', 'avatarUrl')),
    },
    repo: {
      name: str(get(repo, 'name')),
      url: str(get(repo, 'url')),
    },
    payload: get(raw, 'payload'),
    created_at: isoStr(get(raw, 'created_at', 'createdAt')),
    public: bool(get(raw, 'public')),
  };
}

export function normalizeGitHubEvents(input: unknown): GitHubEvents {
  const raw = input as Record<string, unknown>;
  const actor = get(raw, 'actor') as Record<string, unknown> | undefined;
  const repo = get(raw, 'repo') as Record<string, unknown> | undefined;
  return {
    id: str(get(raw, 'id')),
    type: str(get(raw, 'type')),
    actor: {
      login: str(get(actor, 'login')),
      avatar_url: str(get(actor, 'avatar_url', 'avatarUrl')),
    },
    repo: {
      name: str(get(repo, 'name')),
    },
  };
}

export function normalizeGitHubContributor(input: unknown): GitHubContributor {
  const raw = input as Record<string, unknown>;
  return {
    login: str(get(raw, 'login')),
    avatar_url: str(get(raw, 'avatar_url', 'avatarUrl')),
    contributions: num(get(raw, 'contributions')),
  };
}

export function normalizeGitHubLanguages(
  input: unknown
): Array<{ language: string; bytes: number }> {
  // Accept either { "TypeScript": 12345, ... } or array form
  const raw = unwrapData<unknown>(input);
  if (isObject(raw)) {
    return Object.entries(raw).map(([language, bytes]) => ({
      language,
      bytes: typeof bytes === 'number' ? bytes : 0,
    }));
  }
  if (Array.isArray(raw)) {
    const arr = raw as unknown[];
    return arr.map((item) => {
      const r = item as Record<string, unknown>;
      return {
        language: str(get(r, 'language')),
        bytes: num(get(r, 'bytes')),
      };
    });
  }
  return [];
}

export function normalizeGitHubOverview(input: unknown): GitHubOverview {
  const raw = unwrapData<Record<string, unknown>>(input);
  return {
    profile: normalizeGitHubProfile(get(raw, 'profile')),
    stats: normalizeGitHubStats(get(raw, 'stats')),
    commits: Array.isArray(get(raw, 'commits'))
      ? (get(raw, 'commits') as unknown[]).map(normalizeGitHubCommit)
      : [],
    activities: Array.isArray(get(raw, 'activities'))
      ? (get(raw, 'activities') as unknown[]).map(normalizeGitHubActivities)
      : undefined,
  };
}

// --------------- Metrics normalizers ---------------

export function normalizeMetricsSummary(input: unknown): MetricsSummary {
  const raw = unwrapData<Record<string, unknown>>(input);
  const portfolioRaw = (get(raw, 'portfolio') as Record<string, unknown>) ?? {};
  const activityRaw = (get(raw, 'activity') as Record<string, unknown>) ?? {};
  const techRaw =
    (get(raw, 'techStack', 'tech_stack') as Record<string, unknown>) ?? {};
  const prodRaw = (get(raw, 'productivity') as Record<string, unknown>) ?? {};
  const recentRaw = (get(raw, 'recent') as Record<string, unknown>) ?? {};

  return {
    portfolio: {
      totalProjects: num(get(portfolioRaw, 'totalProjects', 'total_projects')),
      totalCommits: num(get(portfolioRaw, 'totalCommits', 'total_commits')),
      totalTechnologies: num(
        get(portfolioRaw, 'totalTechnologies', 'total_technologies')
      ),
      totalLanguages: num(
        get(portfolioRaw, 'totalLanguages', 'total_languages')
      ),
    },
    activity: {
      currentStreak: num(get(activityRaw, 'currentStreak', 'current_streak')),
      longestStreak: num(get(activityRaw, 'longestStreak', 'longest_streak')),
      activeDaysThisMonth: num(
        get(activityRaw, 'activeDaysThisMonth', 'active_days_this_month')
      ),
      commitsThisMonth: num(
        get(activityRaw, 'commitsThisMonth', 'commits_this_month')
      ),
      mostActiveRepository: str(
        get(activityRaw, 'mostActiveRepository', 'most_active_repository')
      ),
    },
    techStack: {
      mostUsedLanguage: str(
        get(techRaw, 'mostUsedLanguage', 'most_used_language')
      ),
      mostUsedTechnology: str(
        get(techRaw, 'mostUsedTechnology', 'most_used_technology')
      ),
      languageDiversity: num(
        get(techRaw, 'languageDiversity', 'language_diversity')
      ),
      technologyDiversity: num(
        get(techRaw, 'technologyDiversity', 'technology_diversity')
      ),
      averageTechnologiesPerProject: num(
        get(
          techRaw,
          'averageTechnologiesPerProject',
          'average_technologies_per_project'
        )
      ),
    },
    productivity: {
      averageCommitsPerDay: num(
        get(prodRaw, 'averageCommitsPerDay', 'average_commits_per_day')
      ),
      averageCommitsPerRepository: num(
        get(
          prodRaw,
          'averageCommitsPerRepository',
          'average_commits_per_repository'
        )
      ),
      consistency: ((): 'high' | 'medium' | 'low' => {
        const v =
          str(get(prodRaw, 'consistency')) || str(get(prodRaw, 'consistency'));
        return v === 'high' || v === 'medium' || v === 'low' ? v : 'medium';
      })(),
    },
    recent: {
      lastActivity: str(get(recentRaw, 'lastActivity', 'last_activity')),
      recentCommits: num(get(recentRaw, 'recentCommits', 'recent_commits')),
      recentProjects: num(get(recentRaw, 'recentProjects', 'recent_projects')),
      recentTechnologies:
        strArr(get(recentRaw, 'recentTechnologies')) ||
        strArr(get(recentRaw, 'recent_technologies')),
    },
  };
}

export function normalizeLanguageMetricsResponse(
  input: unknown
): LanguageMetricsResponse {
  const root = unwrapData<Record<string, unknown>>(input);

  // payload can be the array itself under root.data, or an object
  const payload =
    isObject(get(root, 'data')) || Array.isArray(get(root, 'data'))
      ? (get(root, 'data') as unknown)
      : root;

  // languages list (array)
  let languagesArr: unknown[] = [];
  if (Array.isArray(payload)) {
    languagesArr = payload as unknown[];
  } else if (isObject(payload)) {
    const list =
      get(payload as Record<string, unknown>, 'languages') ??
      get(payload as Record<string, unknown>, 'items') ??
      get(payload as Record<string, unknown>, 'results');
    languagesArr = Array.isArray(list) ? (list as unknown[]) : [];
  }

  const languages = languagesArr.map((l) => {
    const r = l as Record<string, unknown>;
    return {
      name: str(get(r, 'name')),
      count: num(get(r, 'count')),
      percentage: num(get(r, 'percentage')),
      projects: strArr(get(r, 'projects')),
    };
  });

  // Compute summary if not provided by server
  const totalLanguages = languages.length;
  const allProjects = new Set<string>();
  for (const lang of languages)
    for (const p of lang.projects) allProjects.add(p);
  const totalProjects = allProjects.size;

  const mostUsed = languages.reduce(
    (acc, cur) => (cur.count > acc.count ? cur : acc),
    { name: '', count: -1, percentage: 0, projects: [] as string[] }
  ).name;

  const mostUsedPercentage = languages.reduce(
    (acc, cur) => (cur.count > acc.count ? cur : acc),
    { name: '', count: -1, percentage: 0, projects: [] as string[] }
  ).percentage;

  return {
    message: str(get(root, 'message')),
    data: {
      languages,
      summary: {
        mostUsed,
        percentage: mostUsedPercentage,
        totalLanguages,
        totalProjects,
        averageProjectsPerLanguage: totalLanguages
          ? totalProjects / totalLanguages
          : 0,
      },
    },
    cached: bool(get(root, 'cached')),
    rateLimitInfo: (() => {
      const r = get(root, 'rateLimitInfo', 'rate_limit_info') as
        | Record<string, unknown>
        | undefined;
      if (!r) return undefined;
      return {
        remaining: num(get(r, 'remaining')),
        reset: num(get(r, 'reset')),
      };
    })(),
    requestId: str(get(root, 'requestId', 'request_id')),
    startTime: num(get(root, 'startTime', 'start_time')),
  };
}

export function normalizeActivityMetrics(input: unknown): ActivityMetric[] {
  const raw = unwrapData<unknown>(input);

  const mapOne = (r: Record<string, unknown>): ActivityMetric => ({
    type: str(get(r, 'type')) as ActivityMetric['type'],
    period: str(get(r, 'period')),
    count: num(get(r, 'count')),
    projects: strArr(get(r, 'projects')),
    details: (get(r, 'details') as Record<string, unknown>) ?? {},
  });

  if (isObject(raw)) {
    const list =
      (get(raw, 'activities') as unknown) ??
      (get(raw, 'items') as unknown) ??
      (get(raw, 'results') as unknown);
    if (Array.isArray(list)) {
      return list.map((a) => mapOne(a as Record<string, unknown>));
    }
    // single metric object
    return [mapOne(raw)];
  }

  return [];
}

export function normalizeRepositoryMetrics(input: unknown): RepositorySummary {
  const root = unwrapData<Record<string, unknown>>(input);

  // Server returns: { data: { repositories: [...], summary: {...} } }
  // After unwrapData: { repositories: [...], summary: {...} }
  const summaryRaw = (get(root, 'summary') as Record<string, unknown>) ?? {};

  // Get recentRepositories from summary first, then root
  const recentAny =
    get(summaryRaw, 'recentRepositories', 'recent_repositories') ??
    get(root, 'recentRepositories', 'recent_repositories') ??
    get(root, 'repositories') ??
    get(root, 'recent');
  const recent = Array.isArray(recentAny) ? (recentAny as unknown[]) : [];

  return {
    totalRepositories: num(
      get(summaryRaw, 'totalRepositories', 'total_repositories')
    ),
    publicRepositories: num(
      get(summaryRaw, 'publicRepositories', 'public_repositories')
    ),
    privateRepositories: num(
      get(summaryRaw, 'privateRepositories', 'private_repositories')
    ),
    mostStarredRepository: str(
      get(summaryRaw, 'mostStarredRepository', 'most_starred_repository')
    ),
    mostStarredRepositoryStars: num(
      get(
        summaryRaw,
        'mostStarredRepositoryStars',
        'most_starred_repository_stars'
      )
    ),
    averageStarsPerRepository: num(
      get(
        summaryRaw,
        'averageStarsPerRepository',
        'average_stars_per_repository'
      )
    ),
    totalStars: num(get(summaryRaw, 'totalStars', 'total_stars')),
    totalForks: num(get(summaryRaw, 'totalForks', 'total_forks')),
    mostUsedLanguage: str(
      get(summaryRaw, 'mostUsedLanguage', 'most_used_language')
    ),
    languageDistribution: ((): { [language: string]: number } => {
      const v =
        get(summaryRaw, 'languageDistribution', 'language_distribution') ??
        get(summaryRaw, 'languagesDistribution');
      if (isObject(v)) {
        return Object.fromEntries(
          Object.entries(v).map(([k, val]) => [
            k,
            typeof val === 'number' ? val : 0,
          ])
        );
      }
      return {};
    })(),
    recentRepositories: recent
      .map((r) => r as Record<string, unknown>)
      .map(
        (r): RepositoryMetric => ({
          name: str(get(r, 'name')),
          description: ((): string | null => {
            const v = get(r, 'description');
            return typeof v === 'string' ? v : null;
          })(),
          url: ((): string | null => {
            const v = get(r, 'url');
            return typeof v === 'string' ? v : null;
          })(),
          stars: ((): number | null => {
            const v = get(r, 'stars');
            return typeof v === 'number' ? v : null;
          })(),
          forks: num(get(r, 'forks')),
          size: num(get(r, 'size')),
          createdAt: isoStr(get(r, 'createdAt', 'created_at')),
          updatedAt: isoStr(get(r, 'updatedAt', 'updated_at')),
          lastPushed: isoStr(get(r, 'lastPushed', 'last_pushed')),
          topics: strArr(get(r, 'topics')),
          isPrivate: bool(get(r, 'isPrivate', 'is_private', 'private')),
          activityScore: num(get(r, 'activityScore', 'activity_score')),
        })
      ),
  };
}

export function normalizeContributionsMetrics(
  input: unknown
): ContributionsData {
  const raw = unwrapData<Record<string, unknown>>(input);
  const repos = (get(raw, 'repositories') as unknown[]) ?? [];
  const summaryRaw = (get(raw, 'summary') as Record<string, unknown>) ?? {};
  return {
    repositories: repos.map((r) => {
      const rr = r as Record<string, unknown>;
      const recent =
        (get(rr, 'recentCommits', 'recent_commits') as unknown[]) ?? [];
      return {
        repository: str(get(rr, 'repository')),
        contributionCount: num(
          get(rr, 'contributionCount', 'contribution_count')
        ),
        lastContribution: isoStr(
          get(rr, 'lastContribution', 'last_contribution')
        ),
        authors: strArr(get(rr, 'authors')),
        recentCommits: recent.map(normalizeGitHubCommit),
      } as RepositoryContribution;
    }),
    summary: {
      totalContributions: num(
        get(summaryRaw, 'totalContributions', 'total_contributions')
      ),
      totalRepositories: num(
        get(summaryRaw, 'totalRepositories', 'total_repositories')
      ),
      mostContributedRepository: str(
        get(
          summaryRaw,
          'mostContributedRepository',
          'most_contributed_repository'
        )
      ),
      mostContributedRepositoryContributions: num(
        get(
          summaryRaw,
          'mostContributedRepositoryContributions',
          'most_contributed_repository_contributions'
        )
      ),
      averageContributionsPerRepository: num(
        get(
          summaryRaw,
          'averageContributionsPerRepository',
          'average_contributions_per_repository'
        )
      ),
      totalAuthors: num(get(summaryRaw, 'totalAuthors', 'total_authors')),
      mostActiveAuthor: str(
        get(summaryRaw, 'mostActiveAuthor', 'most_active_author')
      ),
      recentContributions: (
        (get(
          summaryRaw,
          'recentContributions',
          'recent_contributions',
          'recentCommits',
          'recent_commits'
        ) as unknown[]) ?? []
      ).map(normalizeGitHubCommit),
    },
  };
}

export function normalizeCommitMetrics(input: unknown): CommitSummary {
  const raw = unwrapData<Record<string, unknown>>(input);

  // Server returns: { data: { commitMetrics: [...], commitSummary: {...} } }
  // After unwrapData: { commitMetrics: [...], commitSummary: {...} }
  const summaryRaw =
    (get(raw, 'commitSummary', 'commit_summary', 'summary') as Record<
      string,
      unknown
    >) ?? raw;

  const recent =
    (get(summaryRaw, 'recentCommits', 'recent_commits') as unknown[]) ??
    (get(raw, 'recentCommits', 'recent_commits') as unknown[]) ??
    [];

  return {
    totalCommits: num(get(summaryRaw, 'totalCommits', 'total_commits')),
    totalRepositories: num(
      get(summaryRaw, 'totalRepositories', 'total_repositories')
    ),
    mostActiveRepository: str(
      get(summaryRaw, 'mostActiveRepository', 'most_active_repository')
    ),
    mostActiveRepositoryCount: num(
      get(
        summaryRaw,
        'mostActiveRepositoryCount',
        'most_active_repository_count'
      )
    ),
    averageCommitsPerRepository: num(
      get(
        summaryRaw,
        'averageCommitsPerRepository',
        'average_commits_per_repository'
      )
    ),
    recentCommits: recent.map(normalizeGitHubCommit),
  };
}

export function normalizeProductivityMetrics(
  input: unknown
): ProductivityMetrics {
  const raw = unwrapData<Record<string, unknown>>(input);

  // Handle both flat and grouped structures
  const summaryRaw = (get(raw, 'summary') as Record<string, unknown>) ?? raw;

  return {
    totalCommits: num(get(summaryRaw, 'totalCommits', 'total_commits')),
    totalRepositories: num(
      get(summaryRaw, 'totalRepositories', 'total_repositories')
    ),
    mostActiveRepository: str(
      get(summaryRaw, 'mostActiveRepository', 'most_active_repository')
    ),
    mostActiveRepositoryCount: num(
      get(
        summaryRaw,
        'mostActiveRepositoryCount',
        'most_active_repository_count'
      )
    ),
    averageCommitsPerRepository: num(
      get(
        summaryRaw,
        'averageCommitsPerRepository',
        'average_commits_per_repository'
      )
    ),
    recentCommits: (
      (get(raw, 'commits', 'recentCommits', 'recent_commits') as unknown[]) ??
      (get(summaryRaw, 'recentCommits', 'recent_commits') as unknown[]) ??
      []
    ).map(normalizeGitHubCommit),
    commitsThisWeek: num(
      get(summaryRaw, 'commitsThisWeek', 'commits_this_week')
    ),
    commitsThisMonth: num(
      get(summaryRaw, 'commitsThisMonth', 'commits_this_month')
    ),
    lastActivityDate: isoStr(
      get(summaryRaw, 'lastActivityDate', 'last_activity_date')
    ),
    activeDaysThisMonth: num(
      get(summaryRaw, 'activeDaysThisMonth', 'active_days_this_month')
    ),
  };
}

export function normalizeStreakMetrics(input: unknown): StreakMetrics {
  const raw = unwrapData<Record<string, unknown>>(input);

  // Handle both flat and grouped structures
  const summaryRaw = (get(raw, 'summary') as Record<string, unknown>) ?? raw;

  const current =
    (get(summaryRaw, 'currentStreak', 'current_streak') as Record<
      string,
      unknown
    >) ?? {};
  const longest =
    (get(summaryRaw, 'longestStreak', 'longest_streak') as Record<
      string,
      unknown
    >) ?? {};

  return {
    totalCommits: num(get(summaryRaw, 'totalCommits', 'total_commits')),
    firstCommit: dateOrIso(get(summaryRaw, 'firstCommit', 'first_commit')),
    lastCommit: dateOrIso(get(summaryRaw, 'lastCommit', 'last_commit')),
    currentStreak: {
      start: dateOrIso(get(current, 'start')),
      end: dateOrIso(get(current, 'end')),
      days: num(get(current, 'days')),
    },
    longestStreak: {
      start: dateOrIso(get(longest, 'start')),
      end: dateOrIso(get(longest, 'end')),
      days: num(get(longest, 'days')),
    },
    commitsDays: num(get(summaryRaw, 'commitsDays', 'commits_days')),
  };
}

export function normalizeTechnologiesMetrics(input: unknown): TechnologiesData {
  const raw = unwrapData<Record<string, unknown>>(input);
  const techs = (get(raw, 'technologies') as unknown[]) ?? [];
  const summaryRaw = (get(raw, 'summary') as Record<string, unknown>) ?? {};
  return {
    technologies: techs.map((t) => {
      const r = t as Record<string, unknown>;
      return {
        name: str(get(r, 'name')),
        count: num(get(r, 'count')),
        percentage: num(get(r, 'percentage')),
        projects: strArr(get(r, 'projects')),
      };
    }),
    summary: {
      totalTechnologies: num(
        get(summaryRaw, 'totalTechnologies', 'total_technologies')
      ),
      totalProjects: num(get(summaryRaw, 'totalProjects', 'total_projects')),
      averageTechnologiesPerProject: num(
        get(
          summaryRaw,
          'averageTechnologiesPerProject',
          'average_technologies_per_project'
        )
      ),
      mostUsedTechnology: str(
        get(summaryRaw, 'mostUsedTechnology', 'most_used_technology')
      ),
      mostUsedTechnologyCount: num(
        get(summaryRaw, 'mostUsedTechnologyCount', 'most_used_technology_count')
      ),
      technologyDiversity: num(
        get(summaryRaw, 'technologyDiversity', 'technology_diversity')
      ),
    },
  };
}

export function normalizeTimelineMetrics(input: unknown): TimelineMetrics {
  const raw = unwrapData<Record<string, unknown>>(input);
  const events = (get(raw, 'events') as unknown[]) ?? [];
  const summaryRaw = (get(raw, 'summary') as Record<string, unknown>) ?? {};
  const trendsRaw = (get(raw, 'trends') as Record<string, unknown>) ?? {};
  const devSpan = get(summaryRaw, 'developmentSpan', 'development_span') as
    | Record<string, unknown>
    | undefined;

  return {
    events: events.map((e) => {
      const r = e as Record<string, unknown>;
      return {
        date: isoStr(get(r, 'date')),
        type: str(get(r, 'type')) as TimelineEvent['type'],
        project: ((): string | undefined => {
          const v = get(r, 'project');
          return typeof v === 'string' ? v : undefined;
        })(),
        description: str(get(r, 'description')),
        metadata: ((): TimelineEvent['metadata'] => {
          const m = get(r, 'metadata') as Record<string, unknown> | undefined;
          if (!m) return undefined;
          return {
            commits: ((): number | undefined => {
              const v = get(m, 'commits');
              return typeof v === 'number' ? v : undefined;
            })(),
            stars: ((): number | undefined => {
              const v = get(m, 'stars');
              return typeof v === 'number' ? v : undefined;
            })(),
            forks: ((): number | undefined => {
              const v = get(m, 'forks');
              return typeof v === 'number' ? v : undefined;
            })(),
            language: ((): string | undefined => {
              const v = get(m, 'language');
              return typeof v === 'string' ? v : undefined;
            })(),
            size: ((): number | undefined => {
              const v = get(m, 'size');
              return typeof v === 'number' ? v : undefined;
            })(),
          };
        })(),
      };
    }),
    summary: {
      totalProjects: num(get(summaryRaw, 'totalProjects', 'total_projects')),
      totalCommits: num(get(summaryRaw, 'totalCommits', 'total_commits')),
      developmentSpan: {
        start: isoStr(get(devSpan, 'start')),
        end: isoStr(get(devSpan, 'end')),
        days: num(get(devSpan, 'days')),
      },
      mostActiveMonth: str(
        get(summaryRaw, 'mostActiveMonth', 'most_active_month')
      ),
      leastActiveMonth: str(
        get(summaryRaw, 'leastActiveMonth', 'least_active_month')
      ),
      averageProjectsPerMonth: num(
        get(summaryRaw, 'averageProjectsPerMonth', 'average_projects_per_month')
      ),
    },
    trends: {
      projectOverTime: (
        (get(trendsRaw, 'projectOverTime', 'project_over_time') as unknown[]) ??
        []
      ).map((p) => {
        const r = p as Record<string, unknown>;
        return { month: str(get(r, 'month')), count: num(get(r, 'count')) };
      }),
      commitsOverTime: (
        (get(trendsRaw, 'commitsOverTime', 'commits_over_time') as unknown[]) ??
        []
      ).map((c) => {
        const r = c as Record<string, unknown>;
        return { month: str(get(r, 'month')), count: num(get(r, 'count')) };
      }),
      activityGrowth: ((): 'increasing' | 'decreasing' | 'stable' => {
        const v = str(get(trendsRaw, 'activityGrowth', 'activity_growth'));
        return v === 'increasing' || v === 'decreasing' || v === 'stable'
          ? v
          : 'stable';
      })(),
    },
  };
}

// --------------- Projects normalizers ---------------

export function normalizeProject(input: unknown): Project {
  const raw = unwrapData<Record<string, unknown>>(input);
  return {
    id: num(get(raw, 'id')),
    name: str(get(raw, 'name')),
    description: ((): string | null => {
      const v = get(raw, 'description');
      return typeof v === 'string' ? v : null;
    })(),
    html_url: ((): string | null | undefined => {
      const v = get(raw, 'html_url', 'htmlUrl');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    language: ((): string | null | undefined => {
      const v = get(raw, 'language');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    stargazers_count: ((): number | null | undefined => {
      const v = get(raw, 'stargazers_count', 'stargazersCount');
      return typeof v === 'number' ? v : v === null ? null : undefined;
    })(),
    forks_count: ((): number | null | undefined => {
      const v = get(raw, 'forks_count', 'forksCount');
      return typeof v === 'number' ? v : v === null ? null : undefined;
    })(),
    created_at: ((): string | null | undefined => {
      const v = get(raw, 'created_at', 'createdAt');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    updated_at: ((): string | null | undefined => {
      const v = get(raw, 'updated_at', 'updatedAt');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    categories: ((): Project['categories'] => {
      const v = get(raw, 'categories');
      return Array.isArray(v)
        ? (v.filter((x) => typeof x === 'string') as Project['categories'])
        : [];
    })(),
    status: ((): Project['status'] => {
      const v = str(get(raw, 'status'));
      const allowed: ReadonlyArray<Project['status']> = [
        'active',
        'inactive',
        'archived',
        'completed',
        'in development',
        'experimental',
      ];
      const isProjectStatus = (value: string): value is Project['status'] =>
        (allowed as ReadonlyArray<string>).includes(value);
      return isProjectStatus(v) ? v : 'active';
    })(),
    featured: bool(get(raw, 'featured')),
    demo_url: ((): string | undefined => {
      const v = get(raw, 'demo_url', 'demoUrl');
      return typeof v === 'string' ? v : undefined;
    })(),
    technologies: strArr(get(raw, 'technologies')),
    pushed_at: ((): string | null | undefined => {
      const v = get(raw, 'pushed_at', 'pushedAt');
      return typeof v === 'string' ? v : v === null ? null : undefined;
    })(),
    topics: ((): string[] | undefined => {
      const v = get(raw, 'topics');
      return Array.isArray(v)
        ? v.filter((x) => typeof x === 'string')
        : undefined;
    })(),
  };
}

export const normalizeProjects = (input: unknown): Project[] => {
  const raw = unwrapData<unknown>(input);
  if (!Array.isArray(raw)) return [];
  return raw.map(normalizeProject);
};
