import styled from "styled-components";

export const StyledHeader = styled.div`
  p {
    padding: 15px 0 15px 0;
  }

  @media ${props => props.theme.devices.mobileL} {
    p {
      padding: 10px 0 10px 0;
    }
  }
`;