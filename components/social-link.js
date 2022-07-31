import {
  Button,
  Link,
  ListItem,
  Icon,
} from "@chakra-ui/react";

const SocialLink = ({ href, logo, title }) => {
  return ( 
    <ListItem>
      <Link href={href} target="_blank">
        <Button 
        variant="ghost" 
        colorScheme="teal"
        leftIcon={<Icon as={logo} />} fontWeight="500">
          {title}
        </Button>
      </Link>
    </ListItem>
  );
}

export default SocialLink;