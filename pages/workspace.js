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

const workingSpace = [
  {
    title: "OS",
    descr: "macOS",
  },
  {
    title: "Code Editor",
    descr: "Neovim, VS Code",
  },
  {
    title: "Terminal",
    descr: "iTerm 2, Tmux",
  },
  {
    title: "Shell",
    descr: "Ohmyzsh, powerlevel10k",
  },
  {
    title: "Window Manager",
    descr: "Rectangle",
  },
  {
    title: "Laptop",
    descr: "Macbook Air M1 16/256",
  },
  {
    title: "Display",
    descr: "Samsung LC32JG54 144Hz, 2560x1440, 32'",
  },
  {
    title: "Keyboard",
    descr: "Keychron K2V2",
  },
  {
    title: "Mouse",
    descr: "Magic Mouse 2",
  },
  {
    title: "Audiocard",
    descr: "Focusrite Scarlett 2i2 3rd Gen",
  },
  {
    title: "Studio Monitors",
    descr: "Presonus Eris E5",
  },
  {
    title: "Microphone",
    descr: "SE Electronics X1S",
  },
  {
    title: "Monitor Lamp",
    descr: "Yeelight LED Screen Light Bar Pro",
  },
];

const gamingSpace = [
  {
    title: "OS",
    descr: "Windows 10",
  },
  {
    title: "Case",
    descr: "Corsair 740 Air",
  },
  {
    title: "Motherboard",
    descr: "ASUS Prime Z270-A",
  },
  {
    title: "GPU",
    descr: "NVIDIA GTX 1060 6GB",
  },
  {
    title: "RAM",
    descr: "16GB",
  },
  {
    title: "CPU",
    descr: "Intel Core i5-7600k 3.80 GHz",
  },
  {
    title: "Mouse",
    descr: "Logitech G102",
  },
  {
    title: "Headphones",
    descr: "Sennheiser HD 206",
  },
  {
    title: "Mouse Pad",
    descr: "ZET GAMING GM-XL Gun",
  },
];

const Stack = () => {
  return (
    <Layout title="Workspace">
      <Container mt={4}>
        <Section delay={0.2}>
          <Heading Heading as="h3" fontSize={22}>
            🖥️ Working Space
          </Heading>
        </Section>
        <Section delay={0.2}>
          <UnorderedList spacing={5} fontSize={16}>
            {workingSpace.map((item) => (
              <ListItem>
                <b>{item.title}</b> - {item.descr}
              </ListItem>
            ))}
          </UnorderedList>
        </Section>
        <Section delay={0.6}>
          <Divider my={6} />
          <Heading Heading as="h3" fontSize={22}>
            🎮 Gaming Space
          </Heading>
        </Section>
        <Section delay={0.6}>
          <UnorderedList spacing={5} fontSize={16}>
            {gamingSpace.map((item) => (
              <ListItem>
                <b>{item.title}</b> - {item.descr}
              </ListItem>
            ))}
          </UnorderedList>
        </Section>
      </Container>
    </Layout>
  );
};

export default Stack;
