import NextLink from 'next/link';
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from '../components/bio';
import Footer from '../components/footer';
import { GridItem } from '../components/grid-item';
import SocialLink from '../components/social-link';
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoVk,
} from 'react-icons/io5';
import {
  BsTelegram
} from 'react-icons/bs';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          my={6}
          align="center"
        >
          Hello world, I&apos;m a Fullstack Developer based in Saint Petersburg!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Efimov Nikita
            </Heading>
            <p>Digital Creator (Developer / Gamer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/icykit.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>I&apos;m 19 years old Fullstack Developer. I was born in St. Petersburg, Russia. While studying at school, I started doing design first, and then programming and creating websites. All my life, my dream has been to be a Developer. I tried myself in different IT fields to get a full understanding of the team interaction. Coming to the crypto gave me a boost in my desire to become a Fullstack Developer.</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/stack">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" my={2}>
                My Stack
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant="section-title">
            Bio
          </Heading>
          <BioSection py={0.5}>
            <BioYear>2003</BioYear>
            Born in Saint Petersburg, Russia.
          </BioSection>
          <BioSection py={0.5}>
            <BioYear>2020 - 2021</BioYear>
            Worked at GipsyTeam, Affilate Manager
          </BioSection>
          <BioSection py={0.5}>
            <BioYear>2021</BioYear>
            Completed middle school of General Education.
          </BioSection>
          <BioSection py={0.5}>
            <BioYear>2021</BioYear>
            Worked at DataLoft, UI/UX Designer.
          </BioSection>
          <BioSection py={0.5}>
            <BioYear>2023</BioYear>
            Completed a one-year course on Fullstack development
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Coding, Blockchain, NFT, {' '}
            <Link href="https://shikimori.one/IcyKit/list/anime/order-by/name" target="_blank">
              Anime
            </Link>
            , {' '}
            <Link href="https://www.behance.net/icykit" target="_blank">
              Design
            </Link>
            , Traveling, Games, Music
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <SocialLink href="https://github.com/IcyKit" title="@IcyKit" logo={IoLogoGithub} />
            <SocialLink href="https://t.me/icykit" title="@IcyKit" logo={BsTelegram} />
            <SocialLink href='https://vk.com/mrkit228' title="Nikita Efimov" logo={IoLogoVk} />
            <SocialLink href="https://discordapp.com/users/193069352554201088/" title="IcyKit#1922" logo={IoLogoDiscord} />
            <SocialLink href="https://www.instagram.com/icy_kit/" title="icy_kit" logo={IoLogoInstagram} />
            <SocialLink href="https://www.facebook.com/icykit/" title="Nikita Efimov" logo={IoLogoFacebook} />
            <SocialLink href="https://www.linkedin.com/in/nikita-efimov-756461237/" title="Nikita Efimov" logo={IoLogoLinkedin} />
            <SocialLink href="https://twitter.com/icy_kit" title="@icy_kit" logo={IoLogoTwitter} />
          </List>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" my={2}>
                My Works
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
