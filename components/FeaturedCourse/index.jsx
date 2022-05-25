import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from '@aws-amplify/ui-react';

import CardImage from '../CardImage';
import CourseStats from '../CourseStats'
import CourseTags from '../CourseTags'


export const HeroLayout = () => {
  let tags = ['#fullstack', '#mobile']
  return (
    <View as="div" margin={32}>
      <CardImage />
      <CourseStats newCourse={true} />
      <Heading level={1} fontWeight={200} marginBottom={24} fontSize={32}>
        Build fullstack mobile
        applications with Amplify
      </Heading>
      <CourseTags tags={tags} />
      <Text color="#545B64" marginBottom={20} marginTop={24}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Morbi tristique senectus et netus et malesuada.
      </Text>
      <Flex direction={'column'} marginBottom={72}>
        <Button backgroundColor={'#EE7411'} color={'#fff'}>
          Explore course
        </Button>
        <Button color='#545B64'>
          <Image src='/icons/play.svg' alt="play trailer" marginRight={14.7} />Watch trailer
        </Button>
      </Flex>
    </View>
  )
}