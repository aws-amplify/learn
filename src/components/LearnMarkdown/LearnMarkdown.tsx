import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeExternalLinks from "rehype-external-links";
import { Button, View } from "@aws-amplify/ui-react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./LearnMarkdown.module.scss";

function CodeBlock({
  node,
  children,
  inline,
  className,
  ...props
}: {
  node: any;
  children: any;
  inline?: any;
  className?: any;
}) {
  const match = /language-(\w+)/.exec(className || "");
  const [showButton, setShowButton] = useState(false);
  const [copied, setCopied] = useState(false);

  // Custom wrapper around `code`
  const PreTag = ({ children, ...rest }: { children: any }) => (
    <View {...rest} as="div" backgroundColor="#F2F3F3" fontSize="0.9rem">
      {children}
    </View>
  );

  return match ? (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setShowButton(false);
        setCopied(false);
      }}
    >
      {showButton && (
        <CopyToClipboard
          text={children}
          onCopy={() => {
            setCopied(true);
          }}
        >
          <Button size="small" position="absolute" top="5px" right="5px">
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
      )}
      <SyntaxHighlighter
        language={match[1]}
        showLineNumbers={true}
        PreTag={PreTag}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>{" "}
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

export function LearnMarkdown({
  markdownContent,
}: {
  markdownContent: string;
}) {
  return (
    <View>
      <ReactMarkdown
        rehypePlugins={[rehypeExternalLinks]}
        components={{ code: CodeBlock }}
        className={styles["markdown-wrapper"]}
      >
        {markdownContent}
      </ReactMarkdown>
    </View>
  );
}
