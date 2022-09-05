import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;700;800&display=swap')
  `}
  />
);

export default Fonts;
