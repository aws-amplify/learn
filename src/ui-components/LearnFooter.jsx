/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
import MadeLabel from "./MadeLabel";
import LearnSocialBorderless from "./LearnSocialBorderless";
export default function LearnFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="48px"
      direction="row"
      width="1292px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="80px 128px 128px 128px"
      backgroundColor="rgba(242,243,243,1)"
      {...rest}
      {...getOverrideProps(overrides, "LearnFooter")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        height="174.79px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 313")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="64px"
          height="38.79px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "AWS_designsystem_dark")}
        >
          <Icon
            width="58.62px"
            height="20.21px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 58.6162109375,
              height: 20.20849609375,
            }}
            paths={[
              {
                d: "M15.5941 15.9603C15.4123 15.3385 15.3302 14.6913 15.3509 14.0434L15.3723 7.03029C15.3694 4.67537 14.7792 2.91493 13.6016 1.74896C12.4239 0.582987 10.5679 3.70152e-07 8.03345 3.70152e-07C6.91465 -0.000267181 5.80045 0.144509 4.71818 0.430778C3.79427 0.663477 2.89641 0.991143 2.03867 1.40864C1.80555 1.5072 1.60031 1.66262 1.44132 1.86096C1.32447 2.09228 1.27281 2.35157 1.29198 2.61051L1.29198 3.66161C1.29198 4.10962 1.41999 4.33793 1.71866 4.33793C1.83257 4.33055 1.94548 4.31179 2.05573 4.28193C2.30925 4.20412 2.55729 4.10913 2.79815 3.99762C3.54338 3.69797 4.30913 3.45323 5.08939 3.2653C5.8395 3.0809 6.60861 2.98691 7.38064 2.98529C9.01907 2.98529 10.1711 3.31699 10.8452 3.98039C11.5137 4.64378 11.8479 5.79252 11.8479 7.42661L11.8479 8.99464C11.0031 8.79648 10.1924 8.63709 9.41161 8.52509C8.66406 8.4158 7.90984 8.35966 7.1545 8.35709C4.96992 8.35422 3.23193 8.91135 1.94053 10.0285C0.659834 11.1252 -0.0524418 12.7539 0.00769232 14.4483C-0.0730858 15.986 0.485183 17.488 1.54799 18.5924C2.6033 19.6205 4.02555 20.1345 5.81474 20.1345C8.24381 20.1725 10.554 19.0755 12.0741 17.1622C12.2959 17.6403 12.5135 18.0582 12.7226 18.4244C12.9351 18.7869 13.1917 19.1212 13.4864 19.4195C13.6482 19.604 13.8781 19.713 14.1221 19.721C14.3221 19.711 14.5156 19.6454 14.681 19.5315L16.0251 18.6311C16.2637 18.5016 16.4234 18.2613 16.4517 17.9893C16.4443 17.8167 16.3928 17.6491 16.3024 17.5025C16.0214 17.0107 15.7844 16.4946 15.5941 15.9603ZM8.90835 16.9214C8.20196 17.1722 7.4597 17.3046 6.71097 17.3134C5.89573 17.366 5.0936 17.0867 4.48373 16.538C3.92469 15.9205 3.64226 15.0978 3.70291 14.2635C3.64424 13.3171 4.02987 12.398 4.744 11.7822C5.43237 11.2078 6.48768 10.9207 7.90993 10.9207C8.57622 10.9235 9.24169 10.9681 9.9025 11.0542C10.5576 11.1437 11.2071 11.2703 11.8481 11.4333L11.8481 12.2948C11.8613 12.9272 11.7924 13.5587 11.6433 14.173C11.5101 14.6816 11.2618 15.152 10.918 15.5472C10.379 16.1752 9.68598 16.6492 8.90835 16.9214ZM23.8033 19.6439C23.5152 19.6666 23.2276 19.594 22.984 19.4371C22.7607 19.1987 22.6123 18.899 22.5574 18.5756L17.5482 1.95618C17.4536 1.67708 17.3906 1.38805 17.3605 1.09463C17.3403 0.94995 17.3886 0.80411 17.4909 0.7008C17.5933 0.59749 17.7377 0.548711 17.881 0.569077L19.9674 0.569077C20.2669 0.537945 20.5679 0.610887 20.8208 0.77585C21.0373 1.01895 21.1848 1.31664 21.2475 1.63741L24.823 15.8531L28.1383 1.63741C28.1821 1.31046 28.3322 1.00744 28.5649 0.77585C28.8196 0.615181 29.1192 0.542598 29.4183 0.569077L31.125 0.569077C31.424 0.544459 31.723 0.616903 31.9783 0.77585C32.2078 1.00985 32.3573 1.31168 32.405 1.63741L35.7544 16.0383L39.4409 1.63741C39.5036 1.31664 39.651 1.01895 39.8676 0.77585C40.12 0.609912 40.4214 0.536887 40.7209 0.569077L42.6964 0.569077C42.8341 0.560124 42.9685 0.613934 43.0627 0.715715C43.1569 0.817496 43.201 0.956538 43.1828 1.09463C43.1813 1.20907 43.1684 1.32307 43.1444 1.43494C43.1076 1.61362 43.0577 1.78929 42.9951 1.96049L37.875 18.5799C37.8141 18.9058 37.6581 19.2058 37.427 19.4414C37.1834 19.5983 36.8958 19.6709 36.6078 19.6482L34.7816 19.6482C34.4799 19.6779 34.1774 19.5986 33.9282 19.4242C33.7026 19.1875 33.5537 18.887 33.5016 18.5627L30.1863 4.72608L26.9094 18.5627C26.8536 18.8857 26.7052 19.1852 26.4828 19.4242C26.2322 19.5955 25.9309 19.6746 25.6294 19.6482L23.8033 19.6439ZM47.8762 19.8331C48.9465 20.0829 50.0416 20.2086 51.1402 20.2079C52.1572 20.2186 53.1704 20.0808 54.1483 19.7987C55.0051 19.5543 55.8075 19.1463 56.5121 18.5968C57.1585 18.0843 57.687 17.4361 58.0609 16.6971C58.44 15.9206 58.6302 15.0641 58.6156 14.1986C58.6301 13.1104 58.2831 12.0488 57.6299 11.1831C56.97 10.3072 55.872 9.61796 54.336 9.11538L51.3194 8.13752C50.4634 7.91348 49.6638 7.50983 48.9727 6.95288C48.5574 6.55954 48.3264 6.00707 48.337 5.43224C48.2859 4.65227 48.6757 3.91012 49.3439 3.51527C50.218 3.06685 51.1937 2.85884 52.1728 2.91219C53.5822 2.89076 54.98 3.17272 56.2731 3.73928C56.5266 3.87995 56.8049 3.96922 57.0923 4.00205C57.4123 4.00205 57.5745 3.75651 57.5745 3.32573L57.5745 2.3091C57.5873 2.05815 57.5216 1.80949 57.3867 1.59831C57.2148 1.37953 56.9998 1.19911 56.7553 1.06846C56.4698 0.916728 56.1713 0.791294 55.8635 0.693681C55.5051 0.568755 55.0784 0.456753 54.6518 0.357674C54.1971 0.250929 53.737 0.168963 53.2736 0.112131C52.7983 0.0489587 52.3194 0.0173005 51.84 0.0173599C50.9322 0.0122773 50.0285 0.138484 49.1562 0.392136C48.3612 0.623781 47.6151 1.00046 46.9545 1.50354C46.3309 1.98039 45.811 2.58156 45.427 3.26973C45.0329 4.00117 44.8343 4.82371 44.851 5.65624C44.8517 6.78754 45.2255 7.8864 45.9135 8.77938C46.626 9.7314 47.7652 10.4594 49.3269 10.9591L52.4202 11.937C53.2047 12.1509 53.933 12.5362 54.5536 13.0656C54.9387 13.4677 55.1465 14.0099 55.1296 14.569C55.1589 15.3958 54.7404 16.1731 54.0373 16.598C53.3063 17.0747 52.2709 17.3131 50.9312 17.3131C50.0797 17.3131 49.2304 17.225 48.3967 17.0503C47.5902 16.8858 46.8035 16.6345 46.05 16.3008C45.8281 16.1974 45.6489 16.1241 45.5124 16.0724C45.3864 16.0264 45.2538 16.0017 45.1198 15.9992C44.7956 15.9992 44.6377 16.2448 44.6377 16.6755L44.6377 17.7697C44.6391 17.9775 44.6827 18.1827 44.7657 18.3728C44.9165 18.636 45.1446 18.8452 45.4185 18.9716C46.1946 19.3715 47.0216 19.6614 47.8762 19.8331Z",
                fill: "rgba(104,112,120,1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="0px"
            left="2.68px"
            {...getOverrideProps(overrides, "Shape")}
          >
            <Icon
              width="16.45px"
              height="20.14px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.45166015625,
                height: 20.1357421875,
              }}
              paths={[]}
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Path31472936")}
            ></Icon>
            <Icon
              width="8.15px"
              height="6.4px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.15478515625,
                height: 6.39892578125,
              }}
              paths={[]}
              position="absolute"
              top="10.92px"
              left="3.69px"
              {...getOverrideProps(overrides, "Path31472937")}
            ></Icon>
            <Icon
              width="25.83px"
              height="19.09px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 25.8310546875,
                height: 19.0927734375,
              }}
              paths={[]}
              position="absolute"
              top="0.56px"
              left="17.36px"
              {...getOverrideProps(overrides, "Path31472938")}
            ></Icon>
            <Icon
              width="13.98px"
              height="20.19px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.978515625,
                height: 20.19140625,
              }}
              paths={[]}
              position="absolute"
              top="0.02px"
              left="44.64px"
              {...getOverrideProps(overrides, "Path31472939")}
            ></Icon>
          </Icon>
          <Icon
            width="58.37px"
            height="13.28px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 58.365234375,
              height: 13.28076171875,
            }}
            paths={[
              {
                d: "M57.8483 5.28072C50.8423 10.5017 40.6832 13.2803 31.9364 13.2803C20.2487 13.3408 8.95983 8.9932 0.281333 1.08925C-0.37148 0.490471 0.213065 -0.328007 1.00241 0.137233C10.6469 5.70371 21.5653 8.62774 32.6745 8.61925C40.9741 8.57923 49.1841 6.88397 56.8328 3.63084C58.0147 3.12252 59.0089 4.41916 57.8483 5.28072Z",
                fill: "rgba(104,112,120,1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="25.51px"
            left="0px"
            {...getOverrideProps(overrides, "Path31472940")}
          ></Icon>
          <Icon
            width="12px"
            height="11.93px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 11.99658203125,
              height: 11.9306640625,
            }}
            paths={[
              {
                d: "M8.76321 3.19314C7.8672 2.03435 2.8367 2.64605 0.579587 2.91744C-0.103093 2.99929 -0.209762 2.3962 0.40465 1.96111C4.41539 -0.88202 10.9905 -0.0635424 11.7542 0.888476C12.518 1.84049 11.5494 8.50463 7.79039 11.6795C7.21438 12.1662 6.66397 11.9035 6.93704 11.2487C7.76479 9.12925 9.6507 4.35193 8.76321 3.19314Z",
                fill: "rgba(104,112,120,1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="24.23px"
            left="52px"
            {...getOverrideProps(overrides, "Path31472941")}
          ></Icon>
        </Flex>
        <Text
          fontFamily="Amazon Ember"
          fontSize="14px"
          fontWeight="400"
          color="rgba(104,112,120,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="480px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="The Learn Amplify is supported by Amazon Web Services © 2022, Amazon Web Services, Inc. or its affiliates. All rights reserved. "
          {...getOverrideProps(
            overrides,
            "The Learn Amplify is supported by Amazon Web Services \u00A9 2022, Amazon Web Services, Inc. or its affiliates. All rights reserved."
          )}
        ></Text>
        <MadeLabel
          display="flex"
          gap="12px"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(169,182,183,1)"
          borderRadius="4px"
          padding="7px 19px 7px 19px"
          backgroundColor="rgba(255,255,255,1)"
          isHover={false}
          isActive={false}
          {...getOverrideProps(overrides, "MadeLabel")}
        ></MadeLabel>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        height="128px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 384")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 377")}
        >
          <LearnSocialBorderless
            width="64px"
            height="64px"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            isHover={false}
            isActive={false}
            {...getOverrideProps(overrides, "LearnSocialBorderless31472969")}
          ></LearnSocialBorderless>
          <LearnSocialBorderless
            width="64px"
            height="64px"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            isHover={false}
            isActive={false}
            {...getOverrideProps(overrides, "LearnSocialBorderless31472970")}
          ></LearnSocialBorderless>
          <LearnSocialBorderless
            width="64px"
            height="64px"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            isHover={false}
            isActive={false}
            {...getOverrideProps(overrides, "LearnSocialBorderless31472971")}
          ></LearnSocialBorderless>
          <LearnSocialBorderless
            width="64px"
            height="64px"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            isHover={false}
            isActive={false}
            {...getOverrideProps(overrides, "LearnSocialBorderless31472972")}
          ></LearnSocialBorderless>
        </Flex>
        <Button
          display="flex"
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Submit issue on GitHub"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
