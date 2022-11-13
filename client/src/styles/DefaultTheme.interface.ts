import 'styled-components';

interface AccentColor {
  blue: string,
  red: string,
  green: string,
  yellow: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string,
      title: string,
      background: string,
      secondaryBackground: string,
      border: string,
      secondaryBorder: string,
      link: string,
      accent: AccentColor,
      secondaryAccent: string
    }
    devices: {
      mobileS: string,
      mobileM: string,
      mobileL: string,
      tablet: string,
      laptop: string,
      laptopL: string,
      desktop: string
    }
  }
}
