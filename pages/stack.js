import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import {
  SiElectron,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiNpm,
  SiPostgresql,
  SiSocketdotio,
  SiPostman,
  SiGraphql,
  SiReduxsaga,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiBootstrap,
  SiMaterialui,
  SiChakraui,
  SiSass,
  SiTailwindcss,
  SiMarkdown,
  SiTypescript,
  SiSolidity,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiVim,
  SiFigma,
  SiAdobephotoshop,
  SiBlender,
} from "react-icons/si";

const Stack = () => {
  const techStack = [
    { title: "HTML", icon: SiHtml5 },
    { title: "CSS", icon: SiCss3 },
    { title: "JavaScript", icon: SiJavascript },
    { title: "TypeScript", icon: SiTypescript },
    { title: "React", icon: SiReact },
    { title: "Redux", icon: SiRedux },
    { title: "Next.JS", icon: SiNextdotjs },
    { title: "Node.JS", icon: SiNodedotjs },
    { title: "Express", icon: SiExpress },
    { title: "Electron", icon: SiElectron },
    { title: "NPM and Yarn", icon: SiNpm },
    { title: "React Native", icon: SiReact },
    { title: "Webpack", icon: SiWebpack },
    { title: "Babel", icon: SiBabel },
    { title: "ESLint", icon: SiEslint },
    { title: "Bootstrap", icon: SiBootstrap },
    { title: "Material UI", icon: SiMaterialui },
    { title: "Chakra UI", icon: SiChakraui },
    { title: "Sass", icon: SiSass },
    { title: "Tailwind", icon: SiTailwindcss },
    { title: "Markdown", icon: SiMarkdown },
  ];

  const learningNow = [
    { title: "Solidity", icon: SiSolidity },
    { title: "PostgreSQL", icon: SiPostgresql },
  ];

  const inPlans = [
    { title: "MongoDB", icon: SiMongodb },
    { title: "Socket.io", icon: SiSocketdotio },
    { title: "Postman", icon: SiPostman },
    { title: "GraphQL", icon: SiGraphql },
    { title: "ReduxSaga", icon: SiReduxsaga },
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
            Tech Stack
          </Heading>
        </Section>
        <Section delay={0.2}>
          <List spacing={4} fontSize={16}>
            <SimpleGrid spacing={5} columns={[1, 2, 3]}>
              {techStack.map((item) => {
                return (
                  <ListItem>
                    <ListIcon w={5} h={5} as={item.icon} />
                    {item.title}
                  </ListItem>
                );
              })}
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
            {learningNow.map((item) => {
              return (
                <ListItem>
                  <ListIcon w={5} h={5} as={item.icon} />
                  {item.title}
                </ListItem>
              );
            })}
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
            {inPlans.map((item) => {
              return (
                <ListItem>
                  <ListIcon w={5} h={5} as={item.icon} />
                  {item.title}
                </ListItem>
              );
            })}
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
            {tools.map((item) => {
              return (
                <ListItem>
                  <ListIcon w={5} h={5} as={item.icon} />
                  {item.title}
                </ListItem>
              );
            })}
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Stack;
