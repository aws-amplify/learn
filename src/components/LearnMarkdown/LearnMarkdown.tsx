import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

export function LearnMarkdown({
  markdownContent,
}: {
  markdownContent: string;
}) {
  return <ReactMarkdown children={markdownContent} rehypePlugins={[rehypeExternalLinks]} />;
}
