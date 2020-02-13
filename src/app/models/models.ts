export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubUser {
  login: string;
  html_url: string;
}

export interface GithubIssue {
  user: GithubUser;
  created_at: string;
  number: string;
  state: string;
  title: string;
  url:string;
}
