import {
  Text,
  Grid,
  Heading,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { Layout } from "../../components/Layout";
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";
import { NextPage } from "next";

const CoursesPage: NextPage = () => {
  const itemsPerPageBreakpoint = useBreakpointValue({
    base: 3,
    small: 3,
    medium: 3,
    large: 4,
    xl: 6,
  }) as number;

  return (
    <Layout>
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
          as="div"
          marginBottom={{
            base: "118px",
            small: "118px",
            medium: "75px",
            large: "152px",
          }}
        >
          <CardLayoutCollection
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
    </Layout>
  );
};

export default CoursesPage;
