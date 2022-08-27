import {
  Container,
  Icon,
  createIcon,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { WorkGridItem } from '../components/grid-item';
import {
  ReactIcon,
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  BootstrapIcon,
  NextIcon,
  MaterialIcon,
  ChakraIcon,
  NodeIcon,
  ReduxIcon,
  SassIcon,
  MarkdownIcon,
  TailwindIcon,
  SolidityIcon,
  TypeScriptIcon,
  MongodbIcon,
  ExpressIcon,
  GitIcon,
  GitHubIcon,
  VsCodeIcon,
  VimIcon,
  FigmaIcon,
  PhotoshopIcon,
  BlenderIcon,
} from '../components/icons';
import { SiElectron, SiWebpack, SiBabel, SiEslint, SiNpm, SiPostgresql, SiSocketdotio, SiPostman } from 'react-icons/si';

const Stack = () => {
  return (
    <Layout title="Stack">
      <Container mt={4}>
        <Section delay={0.2}>
          <Heading Heading as="h3" fontSize={22}>
            Tech Stack
          </Heading>
        </Section>
        <Section delay={0.2}>
          <List spacing={4} fontSize={16}>
            <SimpleGrid spacing={5} columns={[1, 2, 3]}>
              <ListItem>
                <ListIcon w={5} h={5} as={HtmlIcon} />HTML
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={CssIcon} />CSS
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={JavaScriptIcon} />JavaScript
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={ReactIcon} />React
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={ReduxIcon} />Redux
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={NextIcon} />NextJS
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={NodeIcon} />Node.JS
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={SiElectron} />Electron
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={SiNpm} />NPM and Yarn
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={ReactIcon} />React Native
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={SiWebpack} />Webpack
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={SiBabel} />Babel
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={SiEslint} />ESLint
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={BootstrapIcon} />Bootstrap
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={MaterialIcon} />Material UI
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={ChakraIcon} />Chakra UI
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={SassIcon} />Sass
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={TailwindIcon} />Tailwind
              </ListItem>
              <ListItem>
                <ListIcon w={5} h={5} as={MarkdownIcon} />Markdown
              </ListItem>
            </SimpleGrid>
          </List>
        </Section>
        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={22}>
            Learning right now
          </Heading>
        </Section>
        <Section delay={0.4}>
          <List spacing={4} fontSize={16}>
            <ListItem>
              <ListIcon w={5} h={5} as={TypeScriptIcon} />TypeScript
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={SolidityIcon} />Solidity
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={SiPostgresql} />PostgreSQL
            </ListItem>
          </List>
        </Section>
        <Section delay={0.6}>
          <Divider my={6} />
          <Heading as="h3" fontSize={22}>
            In Plans
          </Heading>
        </Section>
        <Section delay={0.6}>
          <List spacing={4} fontSize={16}>
            <ListItem>
              <ListIcon w={5} h={5} as={ExpressIcon} />Express
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={MongodbIcon} />MongoDB
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={SiSocketdotio} />Socket.io
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={SiPostman} />Postman
            </ListItem>
          </List>
        </Section>
        <Section delay={0.8}>
          <Divider my={6} />
          <Heading as="h3" fontSize={22}>
            Tools
          </Heading>
        </Section>
        <Section delay={0.8}>
          <List spacing={4} fontSize={16}>
            <ListItem>
              <ListIcon w={5} h={5} as={GitIcon} />Git
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={GitHubIcon} />GitHub
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={VsCodeIcon} />VS Code
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={VimIcon} />Vim
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={FigmaIcon} />Figma
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={PhotoshopIcon} />Photoshop
            </ListItem>
            <ListItem>
              <ListIcon w={5} h={5} as={BlenderIcon} />Blender
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Stack;