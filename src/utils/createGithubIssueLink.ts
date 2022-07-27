const NEW_GITHUB_ISSUE_LINK =
  "https://github.com/aws-amplify/community/issues/new";

export function createGithubIssueLink(url: string): string {
  const params = [
    "title=[Bug] TITLE_HERE",
    `body=${encodeURIComponent(
      `**Page**: ${url}\n\n**Issue**:\n\n<!-- Your comments here -->`
    )}`,
  ];

  return `${NEW_GITHUB_ISSUE_LINK}?${params.join("&")}`;
}
