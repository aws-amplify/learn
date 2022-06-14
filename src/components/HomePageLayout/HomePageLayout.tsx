import { DataStore } from 'aws-amplify'
import { AmplifyProvider, Flex, Image, useBreakpointValue } from "@aws-amplify/ui-react";
import { CardLayoutCollection, HeroLayout, HeroLayoutMobile } from "../../ui-components";
import { Course } from '../../models';
import { useEffect, useState } from 'react';

export default function HomePageLayout() {
  const [heroCourse, setHeroCourse] = useState<Course>({ id: ''});

  const variant = useBreakpointValue({base: 'base', small: 'small'}) as 'base' | 'small' | undefined;

  const getHomePageContent = async () => {
    const data = await DataStore.query(Course);
    console.log(data);

    const featuredCourse = data.find((e) => e.isFeatured === true);

    if (featuredCourse) {
      setHeroCourse(featuredCourse);
    } else {
      setHeroCourse(data[0]);
    }
  };

  useEffect(() => {
    getHomePageContent();
  }, [])

  return (
    <>
      <Flex>
        <HeroLayout variation={variant === null ? undefined : variant} course={heroCourse}/>
        <Image src={heroCourse?.image || ''}
        alt={heroCourse?.imageAltText || ''}/>
      </Flex>
      <AmplifyProvider>
          <CardLayoutCollection />
        </AmplifyProvider>
    </>
  );
}
