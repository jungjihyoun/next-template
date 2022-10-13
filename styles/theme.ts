import { Theme } from "@emotion/react";

const theme: Theme = {
  color: {
    gray100: "#f9f9f9",
    gray300: "#bababa",
    gray500: "#797979",
    gray700: "#353535",
    yellow: "#ffc107",
    green: "#4caf50",
    danger: "#ef5350",
  },
  mq: {
    laptop: `@media only screen and (min-width: 1200px)`,
    tablet: `@media only screen (min-width: 768px) and (max-width: 1199px)`,
    mobile: `@media only screen and (max-width: 768px)`,
  },
};

export default theme;
