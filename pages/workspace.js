import {
  Container,
  Heading,
  Divider,
  ListItem,
  UnorderedList,
  ListIcon,
  List,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import {
  BsSpeaker,
  BsCode,
  BsTerminal,
  BsWindowSidebar,
  BsLaptop,
  BsDisplay,
  BsKeyboard,
  BsMouse,
  BsFileSpreadsheetFill,
  BsHeadphones,
} from "react-icons/bs";
import { GiTurtleShell, GiAudioCassette, GiComputerFan } from "react-icons/gi";
import { BiPlanet, BiChip, BiMicrophone } from "react-icons/bi";
import { GoCircuitBoard } from "react-icons/go";
import { MdOutlinePadding } from "react-icons/md";

const Stack = () => {
  return (
    <Layout title="Workspace">
      <Container mt={4}>
        <Section delay={0.2}>
          <Heading Heading as="h3" fontSize={22}>
            Working Space
          </Heading>
        </Section>
        <Section delay={0.2}>
          <List spacing={5} fontSize={16}>
            <ListItem>
              <ListIcon as={BiPlanet} w={5} h={5} mr={3} />
              <b>OS</b> - macOS
            </ListItem>
            <ListItem>
              <ListIcon as={BsCode} w={5} h={5} mr={3} />
              <b>Code Editor</b> - VS Code & Neovim
            </ListItem>
            <ListItem>
              <ListIcon as={BsTerminal} w={5} h={5} mr={3} />
              <b>Terminal</b> - iTerm2, Tmux
            </ListItem>
            <ListItem>
              <ListIcon as={GiTurtleShell} w={5} h={5} mr={3} />
              <b>Shell</b> - Zsh, Powerlevel10k
            </ListItem>
            <ListItem>
              <ListIcon as={BsWindowSidebar} w={5} h={5} mr={3} />
              <b>Window Manager</b> - Rectangle
            </ListItem>
            <ListItem>
              <ListIcon as={BsLaptop} w={5} h={5} mr={3} />
              <b>Laptop</b> - MacBook M1 16/256
            </ListItem>
            <ListItem>
              <ListIcon as={BsDisplay} w={5} h={5} mr={3} />
              <b>Display</b> - Samsung LC32JG54 144Hz, 2560x1440, 32'
            </ListItem>
            <ListItem>
              <ListIcon as={BsKeyboard} w={5} h={5} mr={3} />
              <b>Keyboard</b> - Keychron K2
            </ListItem>
            <ListItem>
              <ListIcon as={BsMouse} w={5} h={5} mr={3} />
              <b>Mouse</b> - Magic Mouse 2
            </ListItem>
            <ListItem>
              <ListIcon as={GiAudioCassette} w={5} h={5} mr={3} />
              <b>Audiocard</b> - Focusrite Scarlett 2i2 3rd Gen
            </ListItem>
            <ListItem>
              <ListIcon as={BsSpeaker} w={5} h={5} mr={3} />
              <b>Studio Monitors</b> - Presonus Eris E5
            </ListItem>
            <ListItem>
              <ListIcon as={BiMicrophone} w={5} h={5} mr={3} />
              <b>Microphone</b> - SE Electronics X1S
            </ListItem>
            <ListItem>
              <ListIcon as={BiPlanet} w={5} h={5} mr={3} />
              <b>Secondary OS</b> - Arch Linux
            </ListItem>
          </List>
        </Section>
        <Section delay={0.6}>
          <Divider my={6} />
          <Heading Heading as="h3" fontSize={22}>
            Gaming Space
          </Heading>
        </Section>
        <Section delay={0.6}>
          <List spacing={5} fontSize={16}>
            <ListItem>
              <ListIcon as={BiPlanet} w={5} h={5} mr={3} />
              <b>OS</b> - Windows 10
            </ListItem>
            <ListItem>
              <ListIcon as={BsFileSpreadsheetFill} w={5} h={5} mr={3} />
              <b>Case</b> - Corsair 740 Air
            </ListItem>
            <ListItem>
              <ListIcon as={GoCircuitBoard} w={5} h={5} mr={3} />
              <b>Motherboard</b> - ASUS PRIME Z270-A
            </ListItem>
            <ListItem>
              <ListIcon as={GiComputerFan} w={5} h={5} mr={3} />
              <b>GPU</b> - Nvidia GTX 1060 6GB
            </ListItem>
            <ListItem>
              <ListIcon as={BiPlanet} w={5} h={5} mr={3} />
              <b>RAM</b> - 16GB
            </ListItem>
            <ListItem>
              <ListIcon as={BiChip} w={5} h={5} mr={3} />
              <b>СPU</b> - Intel Core i5-7600k 3.80 GHz
            </ListItem>
            <ListItem>
              <ListIcon as={BsMouse} w={5} h={5} mr={3} />
              <b>Mouse</b> - Logitech G102
            </ListItem>
            <ListItem>
              <ListIcon as={BsHeadphones} w={5} h={5} mr={3} />
              <b>Headphones</b> - Shure 215 CL
            </ListItem>
            <ListItem>
              <ListIcon as={MdOutlinePadding} w={5} h={5} mr={3} />
              <b>Mouse Pad</b> - ZET GAMING GM-XL Gun
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Stack;
