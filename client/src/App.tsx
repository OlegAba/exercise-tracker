import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import Header from './components/header/Header';
import Endpoint from './components/endpoint/Endpoint';
import { dateEndpointData } from './Data';

interface IProps {}

interface IState {
  isDarkMode: boolean,
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  };

  componentDidMount() {
    const handler = (event: MediaQueryListEvent) => this.setState({ isDarkMode: event.matches });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler);
  };

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme;

    return (
      <ThemeProvider theme={ theme }>
        <>
        <GlobalStyles/>
          <div className='header-container'>
            <div className='max-width-container'>
              <Header title={ 'URL Shortener API' }/>
            </div>
          </div>

          <div className='main-container'>
            <div className='max-width-container'>
              <Endpoint
                active={true} 
                isDarkMode={this.state.isDarkMode} 
                endpointData={dateEndpointData}
              />
            </div>
          </div>
        </>
      </ThemeProvider>
    );
  };
}

export default App;