import { Flex, Text } from "@aws-amplify/ui-react";
import { SocialMediaPlatform } from "../../models";
import { SocialMediaButton } from "../SocialMediaButton";

export function ShareThis() {
  const url = encodeURIComponent(window.location.href);

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}`;
  const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${url}`;

  return (
    <Flex direction="column">
      <Text
        fontSize="0.875rem"
        fontFamily="Amazon Ember Display"
        fontWeight="700"
        color="#545B64"
      >
        SHARE THIS
      </Text>
      <Flex direction="row">
        <SocialMediaButton platform={SocialMediaPlatform.LINKEDIN} url={linkedInShareUrl} />
        <SocialMediaButton platform={SocialMediaPlatform.TWITTER} url={twitterShareUrl} />
        <SocialMediaButton platform={SocialMediaPlatform.FACEBOOK} url={facebookShareUrl}/>
      </Flex>
    </Flex>
  );
}
