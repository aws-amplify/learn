import { Grid, Heading, View, useBreakpointValue } from "@aws-amplify/ui-react";
import { CardLayoutCollection } from "../../../components/CardLayoutCollection";
import { CardLayoutData, Context, MetaInfo } from "../../../types/models";
import { getCardLayoutData } from "../../../lib/getData";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { MetaLayout } from "../../../components/MetaLayout";

export default function CoursesPage(data: { cardLayoutData: string }) {
  const cardLayoutData: CardLayoutData[] = JSON.parse(data.cardLayoutData);

  const itemsPerPageBreakpoint = useBreakpointValue({
    base: 3,
    small: 3,
    medium: 3,
    large: 4,
    xl: 6,
  }) as number;

  // All courses page meta data
  const metaInfo: MetaInfo = {
    title: "All courses",
    description: "All courses on Learn Amplify",
  };

  return (
    <MetaLayout metaInfo={metaInfo}>
      <View columnStart={{ base: "1", small: "1", medium: "1", large: "2" }}>
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
          <Heading fontFamily="Amazon Ember" fontWeight="300" level={1}>
            Courses
          </Heading>
        </Grid>
        <View
          marginBottom={{
            base: "118px",
            small: "118px",
            medium: "75px",
            large: "152px",
          }}
        >
          <CardLayoutCollection
            cardLayouts={cardLayoutData}
            templateColumns={{
              base: "1fr",
              small: "1fr",
              medium: "1fr",
              large: "1fr 1fr",
              xl: "1fr 1fr 1fr",
            }}
            gap="64px"
            isOnHomePage={false}
            itemsPerPage={itemsPerPageBreakpoint}
            marginBottom="30px"
          />
        </View>
      </View>
    </MetaLayout>
  );
}

export interface CoursesPageProps {
  /** Data for the card layout collection */
  cardLayoutData: string;
}

export async function getStaticProps(
  context: GetStaticPropsContext & Context
): Promise<GetStaticPropsResult<CoursesPageProps>> {
  const cardLayoutData = await getCardLayoutData(context);

  return {
    props: {
      cardLayoutData: JSON.stringify(cardLayoutData),
    },
    revalidate: 60,
  };
}
