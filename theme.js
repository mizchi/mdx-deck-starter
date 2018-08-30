import { dark as theme } from "mdx-deck/themes";
import prismStyle from "react-syntax-highlighter/styles/prism/solarizedlight";

export default {
  ...theme,
  prism: {
    style: prismStyle
  }
};
