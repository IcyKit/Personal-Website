import { Box, Heading, Icon, useColorModeValue } from '@chakra-ui/react';
import Section from './section';

const StackCard = ({ icon, title }) => (
  <Section>
    <Box
    borderRadius="lg"
    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
    p={3}
    align="center">
      <Icon as={icon} color={useColorModeValue('gray.800', 'whiteAlpha.900')} boxSize="7em" />
      <Heading as="h3" fontSize={18} mt={4}>
        {title}
      </Heading>
    </Box>
  </Section>
)

export default StackCard;