import React, { FunctionComponent } from 'react';
import { StyledHeader } from './Header.styled';
import { HeaderData } from "./Header.interface";

interface IHeaderProps {
  headerData: HeaderData
}

const Header: FunctionComponent<IHeaderProps> = (props) => {

  const { title, apiURL, description, sourceURL } = props.headerData
  const baseURL = apiURL.replace(/(^\w+:|^)\/\//, '');

  return(
    <StyledHeader>
      <h1>{ title }</h1>
      <a href={ apiURL } target='_blank' rel='noopener noreferrer'>
        <code>[ Base URL: { baseURL } ]</code>
      </a>
      <p>{ description }</p>
      <a href={ sourceURL } target='_blank' rel='noopener noreferrer'>
        Source Code
      </a>
    </StyledHeader>
  );
}

export default Header