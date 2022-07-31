import { Container, Icon, createIcon, Box, Image, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react';
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
import StackCard from '../components/stack-card';

const Stack = () => {
  return (
    <Layout title="Stack">
      <Container mt={4}>
        <Section>
          <Heading Heading as="h3" fontSize={20} mb={4}>
            Tech Stack
          </Heading>
        </Section>
        <SimpleGrid alignItems="center" columns={{sm: 2, md: 3, lg: 3}} gap={6}>
          <StackCard key="React" icon={ReactIcon} title="React"/>
          <StackCard key="JS" icon={JavaScriptIcon} title="JavaScript" />
          <StackCard key="HTML" icon={HtmlIcon} title="HTML" />
          <StackCard key="CSS" icon={CssIcon} title="CSS" />
          <StackCard key="Next" icon={NextIcon} title="Next JS" />
          <StackCard key="Node" icon={NodeIcon} title="Node JS" />
          <StackCard key="Bootstrap" icon={BootstrapIcon} title="Bootstrap" />
          <StackCard key="MaterialUI" icon={MaterialIcon} title="Material UI" />
          <StackCard key="Sass" icon={SassIcon} title="Sass" />
          <StackCard key="Tailwind" icon={TailwindIcon} title="Tailwind" />
          <StackCard key="Markdown" icon={MarkdownIcon} title="Markdown" />
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            In Plans
          </Heading>
        </Section>
        <SimpleGrid alignItems="center" columns={{sm: 2, md: 3, lg: 3}} gap={6}>
          <StackCard key="Redux" icon={ReduxIcon} title="Redux" />
          <StackCard key="TypeScript" icon={TypeScriptIcon} title="TypeScript" />
          <StackCard key="Solidity" icon={SolidityIcon} title="Solidity" />
          <StackCard key="Express" icon={ExpressIcon} title="Express" />
          <StackCard key="MongoDB" icon={MongodbIcon} title="MongoDB" />
        </SimpleGrid>              
        <Section delay={0.5}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Tools
          </Heading>
        </Section>
        <SimpleGrid alignItems="center" columns={{sm: 2, md: 3, lg: 3}} gap={6}>
          <StackCard key="Git" icon={GitIcon} title="Git" />
          <StackCard key="GitHub" icon={GitHubIcon} title="GitHub" />
          <StackCard key="VScode" icon={VsCodeIcon} title="VS Code" />
          <StackCard key="Vim" icon={VimIcon} title="Vim" />
          <StackCard key="Figma" icon={FigmaIcon} title="Figma" />
          <StackCard key="Photoshop" icon={PhotoshopIcon} title="Photoshop" />
          <StackCard key="Blender" icon={BlenderIcon} title="Blender" />
        </SimpleGrid> 
      </Container>
    </Layout>
  )
}

export default Stack;