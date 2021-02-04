import { createGlobalStyle } from "styled-components";
import JetBrainsMonoRegular from "../assets/fonts/JetBrainsMono-Regular.woff2";

const Typography = createGlobalStyle`
@font-face {
    font-family: JetBrainsMonoRegular;
    src: url(${JetBrainsMonoRegular});
}
body{
    font-family: JetBrainsMonoRegular, monospace;
}
`;

export default Typography;
