import styled from "styled-components";

export const StyledEndpoint = styled.div`
  .endpoint-header-container {
    display: flex;
    border-bottom: 2px solid ${props => props.theme.colors.border};
    padding: 10px 0 10px 0;
  }

  h2 {
    line-height: 38px;
  }

  .endpoint-description-container {
    margin-left: 15px;

    p {
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }

  .methods-container {
    margin-top: 10px;
  }

  @media ${props => props.theme.devices.mobileL} {
    .endpoint-header-container {
      flex-wrap: wrap;
    }

    .endpoint-title-container {
      width: 100%;
    }

    .endpoint-description-container {
      margin-left: 0;
      padding: 5px 0 5px 0;
    }
  }
`;
