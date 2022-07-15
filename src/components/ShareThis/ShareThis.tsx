import { Flex, Text } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { SocialMediaPlatform } from "../../models";
import { SocialMediaButton } from "../SocialMediaButton";

export function ShareThis() {
  const [href, setHref] = useState("");

  useEffect(() => {
    setHref(encodeURIComponent(window.location.href));
  }, []);

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${href}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${href}`;
  const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${href}`;

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
        <SocialMediaButton
          platform={SocialMediaPlatform.LINKEDIN}
          url={linkedInShareUrl}
          iconAriaLabel="Share to LinkedIn"
        />
        <SocialMediaButton
          platform={SocialMediaPlatform.TWITTER}
          url={twitterShareUrl}
          iconAriaLabel="Share to Twitter"
        />
        <SocialMediaButton
          platform={SocialMediaPlatform.FACEBOOK}
          url={facebookShareUrl}
          iconAriaLabel="Share to Facebook"
        />
      </Flex>
    </Flex>
  );
}
