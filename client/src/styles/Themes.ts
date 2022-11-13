import { DefaultTheme } from "styled-components"

const devices = {
  mobileS: '(max-width: 320px)',
  mobileM: '(max-width: 375px)',
  mobileL: '(max-width: 600px)',
  tablet: '(max-width: 960px)',
  laptop: '(max-width: 1024px)',
  laptopL: '(max-width: 1440px)',
  desktop: '(max-width: 2560px)'
}

export const lightTheme: DefaultTheme = {
  colors: {
    body: '#3e5060',
    title: '#0d1928',
    background: '#ffffff',
    secondaryBackground: '#fafafa',
    border: '#f5f5f5',
    secondaryBorder: '#dedfe0',
    link: '#2f8cf6',
    accent: {
      blue: '#3587cb',
      red: '#c33f38',
      green: '#467a3b',
      yellow: '#de742d',
    },
    secondaryAccent: '#f1f8fe'
  },
  devices: devices
}

export const darkTheme: DefaultTheme = {
  colors: {
    body: '#bdbdbd',
    title: '#ffffff',
    background: '#0d1928',
    secondaryBackground: '#0b1a2d',
    border: '#1d2839',
    secondaryBorder: '#293441',
    link: '#2f82f6',
    accent: {
      blue: '#4e96d1',
      red: '#ca544e',
      green: '#63985a',
      yellow: '#e99048'
    },
    secondaryAccent: '#192f4a',
  },
  devices: devices
}
