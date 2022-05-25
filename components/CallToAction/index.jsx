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

function callToAction({ title, description }) {
  return (
    <View as='div' margin='128px 32px 186px 32px'>
      <Heading level='3' fontSize={32} lineHeight={'40px'} fontWeight={400} marginBottom={24}>Take Amplify for a Spin!</Heading>
      <Text lineHeight={'24px'} color={'#545B64'} marginBottom={24}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada.</Text>
      <Button backgroundColor={'#EE7411'} color='#fff'>
        <Text color='#fff' marginRight={10.8}>About Amplify</Text>
        <Image src='/icons/ExternalLink.svg' alt="About Amplify" />
      </Button>
    </View>
  )
}

export default callToAction