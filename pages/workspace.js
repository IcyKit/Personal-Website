import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";

const Stack = () => {
  return (
    <Layout title="Stack">
      <Container mt={4}>
        <Section delay={0.2}>
          <Heading Heading as="h3" fontSize={22}>
            Working Space
          </Heading>
        </Section>
        <Section delay={0.2}>
          <UnorderedList spacing={4} fontSize={16}>
            <ListItem>
              <b>OS</b> - macOS
            </ListItem>
            <ListItem>
              <b>Code Editor</b> - VS Code & Neovim
            </ListItem>
            <ListItem>
              <b>Terminal</b> - iTerm2, Tmux
            </ListItem>
            <ListItem>
              <b>Shell</b> - Zsh, powerlevel10k
            </ListItem>
            <ListItem>
              <b>Window Manager</b> - Rectangle
            </ListItem>
            <ListItem>
              <b>Laptop</b> - MacBook M1 16/256
            </ListItem>
            <ListItem>
              <b>Display</b> - Samsung LC32JG54 144Hz, 2560x1440, 32'
            </ListItem>
            <ListItem>
              <b>Keyboard</b> - Motospeed CK62 Red
            </ListItem>
            <ListItem>
              <b>Mouse</b> - Magic Mouse 2
            </ListItem>
            <ListItem>
              <b>Audiocard</b> - Focusrite Scarlett 2i2 3rd Gen
            </ListItem>
            <ListItem>
              <b>Studio Monitors</b> - Presonus Eris E5
            </ListItem>
            <ListItem>
              <b>Secondary OS</b> - Arch Linux
            </ListItem>
          </UnorderedList>
        </Section>
        <Section delay={0.6}>
          <Divider my={6} />
          <Heading Heading as="h3" fontSize={22}>
            Gaming Space
          </Heading>
        </Section>
        <Section delay={0.6}>
          <UnorderedList spacing={4} fontSize={16}>
            <ListItem>
              <b>OS</b> - Windows
            </ListItem>
            <ListItem>
              <b>Chest</b> - Corsair 740 Air
            </ListItem>
            <ListItem>
              <b>Motherboard</b> - ASUS PRIME Z270-A
            </ListItem>
            <ListItem>
              <b>GPU</b> - Nvidia GTX 1060 6GB
            </ListItem>
            <ListItem>
              <b>RAM</b> - 16GB
            </ListItem>
            <ListItem>
              <b>СPU</b> - Intel Core i5-7600k 3.80 GHz
            </ListItem>
            <ListItem>
              <b>Keyboard</b> - Motospeed CK62 Red
            </ListItem>
            <ListItem>
              <b>Mouse</b> - Logitech G102
            </ListItem>
            <ListItem>
              <b>Headphones</b> - Shure 215 CL
            </ListItem>
            <ListItem>
              <b>Audiocard</b> - Focusrite Scarlett 2i2 3rd Gen
            </ListItem>
            <ListItem>
              <b>Studio Monitors</b> - Presonus Eris E5
            </ListItem>
            <ListItem>
              <b>Microphone</b> - SE Electronics X1S
            </ListItem>
            <ListItem>
              <b>Mouse Pad</b> - ZET GAMING GM-XL Gun
            </ListItem>
          </UnorderedList>
        </Section>
      </Container>
    </Layout>
  );
};

export default Stack;
