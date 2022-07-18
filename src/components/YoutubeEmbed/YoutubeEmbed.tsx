import { View } from "@aws-amplify/ui-react";
import styles from "./YoutubeEmbed.module.scss";

export function YoutubeEmbed({ embedId }: { embedId: string }) {
  return (

      <iframe
        className={styles["youtube-iframe"]}
        src={`https://www.youtube-nocookie.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

  );
}
