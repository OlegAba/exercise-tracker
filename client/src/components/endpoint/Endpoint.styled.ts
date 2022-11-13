import styled from "styled-components";

export const StyledEndpoint = styled.div`
  .title-container {
    vertical-align: bottom;
    line-height: 50px;
    display: flex;
    border-bottom: 2px solid ${props => props.theme.colors.border};

    p {
      margin-left: 15px;
    }
  }

  .methods-container {
    margin-top: 10px;
  }

  @media ${props => props.theme.devices.mobileL} {
    .title-container {
      flex-wrap: wrap;
      line-height: 200%;

      h2 {
        width: 100%;
      }

      p {
        margin-left: 0;
      }
    }
  }
`;
