import {
  Grid,
  Heading,
  View,
  Text,
  Button,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { ActionLayout } from "../../../components/ActionLayout";
import { ContributorCollection } from "../../../components/ContributorCollection";
import ExternalIconCustom from "../../../ui-components/ExternalIconCustom";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { trackExternalLink } from "../../../utils/track";
import { Contributor } from "../../../models";
import { Context, MetaInfo } from "../../../types/models";
import { getContributors } from "../../../lib/getData";
import { MetaLayout } from "../../../components/MetaLayout";

export default function AboutPage(data: any) {
  const contributors: Contributor[] = deserializeModel(
    Contributor,
    data.contributors
  );

  const useLargeVariant = useBreakpointValue({
    base: false,
    small: false,
    medium: false,
    large: false,
    xl: true,
  }) as boolean;

  const collectionType = useBreakpointValue({
    base: "list",
    small: "list",
    medium: "grid",
    large: "grid",
  }) as "grid" | "list";

  // About page meta data
  const metaInfo: MetaInfo = {
    title: "About",
    description: "About",
  };

  return (
    <MetaLayout metaInfo={metaInfo}>
      <View columnStart="2">
        <Grid
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr 1fr",
          }}
          gap="16px"
          marginBottom={{
            base: "64px",
            small: "64px",
            medium: "64px",
            large: "128px",
          }}
        >
          <Heading className="page-heading" level={1}>
            About
          </Heading>
          <Text columnStart="1">
            This site contains a collection of courses on{" "}
            <a
              target="_blank"
              href="https://docs.amplify.aws"
              rel="noopener noreferrer"
            >
              AWS Amplify
            </a>{" "}
            brought to you by the Developer Advocacy team working on the
            product.
          </Text>
        </Grid>
        <ContributorCollection
          contributors={contributors}
          type={collectionType}
          useLargeVariant={useLargeVariant}
          gap="20px"
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr 1fr",
            large: "1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}
        />
        <ActionLayout>
          <View>
            <Heading className="action-layout-heading" level={3}>
              {`Let's Connect`}
            </Heading>
            <p>
              Join the Amplify Community Discord to ask questions, contribute to
              the open source project, and learn about new features.
            </p>
          </View>
          <View>
            <Button
              ariaLabel="Join the Amplify Discord"
              variation="primary"
              size="large"
              gap="10px"
              width="max-content"
              onClick={() => {
                trackExternalLink("https://discord.gg/amplify");
                window.open(
                  "https://discord.gg/amplify",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Chat on Discord
              <ExternalIconCustom />
            </Button>
          </View>
        </ActionLayout>
      </View>
    </MetaLayout>
  );
}

interface AboutPageProps {
  contributors: JSON;
}

export async function getStaticProps(
  context: GetStaticPropsContext & Context
): Promise<GetStaticPropsResult<AboutPageProps>> {
  const contributors = await getContributors(context);

  return {
    props: {
      contributors: serializeModel(contributors),
    },
    revalidate: 60,
  };
}
