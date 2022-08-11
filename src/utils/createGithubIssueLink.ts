const NEW_GITHUB_ISSUE_LINK =
  "https://github.com/aws-amplify/community/issues/new";

export function createGithubIssueLink(): string {
  const params = [
    "title=[Bug] TITLE_HERE",
    `body=${encodeURIComponent(`**Issue**:\n\n<!-- Your comments here -->`)}`,
  ];

  return `${NEW_GITHUB_ISSUE_LINK}?${params.join("&")}`;
}
