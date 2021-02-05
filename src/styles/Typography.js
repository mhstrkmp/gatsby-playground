import { createGlobalStyle } from "styled-components";
import JetBrainsMonoRegular from "../assets/fonts/JetBrainsMono-Regular.woff2";

const Typography = createGlobalStyle`
@font-face {
    font-family: JetBrainsMonoRegular;
    src: url(${JetBrainsMonoRegular});
}
:root {
  /* Font Sizes */
--baseFontSize: 1rem;
--baseNavSize: 0.64rem;
--smallFontSize: 0.8rem;
--smallestFontSize: 0.512rem;

--xtra-big-heading: 3.052rem;
--xtra-heading: 2.441rem;
--heading-1: 1.953rem;
--heading-2: 1.563rem;
--heading-3: 1.25rem;
--heading-4: var(--baseFontSize);
--heading-5: var(--smallFontSize);
--heading-6: 0.64rem;
--heading-7: var(--smallestFontSize);
}

body {
    font-family: JetBrainsMonoRegular, monospace;
    line-height: 1.75;
}

p {
    margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
    margin: 3rem 0 1.38rem;
    line-height: 1.3;
}

h1 {
    margin-top: 0;
    font-size: var(--heading-1);
}

h2 {
    font-size: var(--heading-2)
}

h3 {
    font-size: var(--heading-3)
}

h4 {
    font-size: var(--heading-4)
}

h5 {
    font-size: var(--heading-5)
}
`;

export default Typography;
