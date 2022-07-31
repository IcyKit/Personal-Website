import { Container, Box, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { WorkGridItem } from '../components/grid-item';

import thumbCrypto from '../public/works/crypto.jpg'
import thumbTrip from '../public/works/trip.png';
import thumbPacsun from '../public/works/pacsun.png';
import thumbGuru from '../public/works/guru.jpg';

const Works = () => {
  return (
    <Layout title="Works">
    <Container mt={4}>
      <Heading as="h3" fontSize={20} mb={4}>
        Development
      </Heading>
      <Section>
        <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={6}
        mb={6}
        align="center"
      >
        There are no works here yet :(
      </Box>
      </Section>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          UI/UX Design
        </Heading>
      </Section>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem title="Crypto Treasury" thumbnail={thumbCrypto} workLink="https://www.behance.net/gallery/130739795/Crypto-Treasury-Concept-Design-UXUI">
            Concept design of a cryptowallet with the ability to add multiple accounts and store NFT
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem title="Trip & Mind" thumbnail={thumbTrip} workLink="https://www.behance.net/gallery/121068369/Trip-Mind-Design">
            Website for the sale of tours to any country
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem title="Pacsun" thumbnail={thumbPacsun} workLink="https://www.behance.net/gallery/121656699/PACSUN-Re-Design"> 
          Redesign of a popular app and website for selling clothes
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem title="Tech Guru" thumbnail={thumbGuru} workLink="https://www.behance.net/gallery/121294295/TeachGuru-Design">
            Application for publishing and purchasing IT courses
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works