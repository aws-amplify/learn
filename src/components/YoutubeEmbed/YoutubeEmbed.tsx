import { View } from "@aws-amplify/ui-react";

export function YoutubeEmbed({ embedId }: { embedId: string }) {
  return (
    <View as="div">
      <iframe
        width="100%"
        height="450"
        src={`https://www.youtube-nocookie.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </View>
  );
}
