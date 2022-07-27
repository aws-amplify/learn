import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeExternalLinks from "rehype-external-links";
import { Button, View, Image, Flex } from "@aws-amplify/ui-react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import styles from "./LearnMarkdown.module.scss";

type PropsHelper<Element extends ElementType> =
  ComponentPropsWithoutRef<Element> & ReactMarkdownProps;

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

function Paragraph({ node, children }: PropsHelper<"p">) {
  console.log("p tag", { node, children });

  if (
    node.children[0].type === "element" &&
    node.children[0].tagName === "img"
  ) {
    const image = node.children[0];
    const alt = image?.properties?.alt;
    const src = image?.properties?.src;

    if (
      typeof src === "string" &&
      (typeof alt === "string" || typeof alt === "undefined")
    ) {
      return (
        <Flex justifyContent="center" margin="20px 0px">
          <Image src={src} alt={alt ? alt : ""} />
        </Flex>
      );
    }
  }

  return <p>{children}</p>;
}

export function LearnMarkdown({
  markdownContent,
}: {
  markdownContent: string;
}) {
  console.log("markdown content: ", markdownContent);
  return (
    <View>
      <ReactMarkdown
        rehypePlugins={[rehypeExternalLinks]}
        components={{ code: CodeBlock, p: Paragraph }}
        className={styles["markdown-wrapper"]}
      >
        {markdownContent}
      </ReactMarkdown>
    </View>
  );
}
