import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";

const Stack = () => {
  const techStack = [
    { title: "HTML / CSS" },
    { title: "JavaScript / TypeScript" },
    { title: "NodeJS / Express" },
    { title: "MySQL / PostgreSQL" },
    { title: "ReactJS / Next.js" },
    { title: "React Router v6" },
    { title: "Axios" },
    { title: "Electron / React Native" },
    { title: "Redux / Redux Toolkit" },
    { title: "SCSS / styles-components / CSS Modules / BEM" },
    { title: "EJS" },
    { title: "Bootstrap / Tailwind / Chakra UI / Material UI" },
    { title: "Webpack / Gulp / Babel" },
    { title: "JSON" },
    { title: "Prettier / ESLint" },
    { title: "NPM / Yarn" },
    { title: "Markdown" },
  ];

  const inPlans = [
    { title: "Solidity" },
    { title: "Sequalize" },
    { title: "WebSoket" },
    { title: "Socket.io" },
    { title: "Postman" },
    { title: "GraphQL" },
    { title: "ReduxSaga" },
    { title: "MongoDB" },
  ];

  const tools = [
    { title: "Git", icon: SiGit },
    { title: "GitHub", icon: SiGithub },
    { title: "VS Code", icon: SiVisualstudiocode },
    { title: "Vim", icon: SiVim },
    { title: "Figma", icon: SiFigma },
    { title: "Photoshop", icon: SiAdobephotoshop },
    { title: "Blender", icon: SiBlender },
  ];

  return (
    <Layout title="Stack">
      <Container mt={4}>
        <Section delay={0.2}>
          <Heading Heading as="h3" fontSize={22}>
            🔨 Tech Stack
          </Heading>
        </Section>
        <Section delay={0.2}>
          <SimpleGrid>
            <UnorderedList spacing={4} fontSize={16}>
              {techStack.map((item) => {
                return (
                  <ListItem key={item.title} mb={3}>
                    {item.title}
                  </ListItem>
                );
              })}
            </UnorderedList>
          </SimpleGrid>
        </Section>
        <Section delay={0.6}>
          <Divider my={6} />
          <Heading as="h3" fontSize={22}>
            💬 In Plans
          </Heading>
        </Section>
        <Section delay={0.6}>
          <SimpleGrid>
            <UnorderedList spacing={4} fontSize={16}>
              {inPlans.map((item) => {
                return (
                  <ListItem key={item.title} mb={3}>
                    {item.title}
                  </ListItem>
                );
              })}
            </UnorderedList>
          </SimpleGrid>
        </Section>
        <Section delay={0.8}>
          <Divider my={6} />
          <Heading as="h3" fontSize={22}>
            ⌨️ Tools
          </Heading>
        </Section>
        <Section delay={0.8}>
          <UnorderedList spacing={4} fontSize={16}>
            {tools.map((item) => {
              return (
                <ListItem key={item.title} mb={3}>
                  {item.title}
                </ListItem>
              );
            })}
          </UnorderedList>
        </Section>
      </Container>
    </Layout>
  );
};

export default Stack;
