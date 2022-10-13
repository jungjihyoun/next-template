import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      gray100: string;
      gray300: string;
      gray500: string;
      gray700: string;
      yellow: string;
      green: string;
      danger: string;
    };
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
