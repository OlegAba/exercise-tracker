import styled from "styled-components";

export const StyledEndpointMethod = styled.div`
  .blue-accent {
    button {
      border-color: ${path => path.theme.colors.accent.blue};

      span {
        background: ${path => path.theme.colors.accent.blue};
      }
    }

    button.open {
      border-top: 1px solid ${path => path.theme.colors.accent.blue};
      border-left: 1px solid ${path => path.theme.colors.accent.blue};
      border-right: 1px solid ${path => path.theme.colors.accent.blue};
    }

    #accordion {
      border-color: ${path => path.theme.colors.accent.blue};
    }
  }

  .red-accent {
    button {
      border-color: ${path => path.theme.colors.accent.red};

      span {
        background: ${path => path.theme.colors.accent.red};
      }
    }

    button.open {
      border-top: 1px solid ${path => path.theme.colors.accent.red};
      border-left: 1px solid ${path => path.theme.colors.accent.red};
      border-right: 1px solid ${path => path.theme.colors.accent.red};
    }

    #accordion {
      border-color: ${path => path.theme.colors.accent.red};
    }
  }

  .green-accent {
    button {
      border-color: ${path => path.theme.colors.accent.green};

      span {
        background: ${path => path.theme.colors.accent.green};
      }
    }

    button.open {
      border-top: 1px solid ${path => path.theme.colors.accent.green};
      border-left: 1px solid ${path => path.theme.colors.accent.green};
      border-right: 1px solid ${path => path.theme.colors.accent.green};
    }

    #accordion {
      border-color: ${path => path.theme.colors.accent.green};
    }
  }

  .yellow-accent {
    button {
      border-color: ${path => path.theme.colors.accent.yellow};

      span {
        background: ${path => path.theme.colors.accent.yellow};
      }
    }

    button.open {
      border-top: 1px solid ${path => path.theme.colors.accent.yellow};
      border-left: 1px solid ${path => path.theme.colors.accent.yellow};
      border-right: 1px solid ${path => path.theme.colors.accent.yellow};
    }

    #accordion {
      border-color: ${path => path.theme.colors.accent.yellow};
    }
  }

  button {
    width: 100%;
    display: flex;
    border-radius: 10px;
    padding: 5px;
    border: none;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    background: ${path => path.theme.colors.background};
  }  

  button.open {
    border: none;
    border-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  button span {
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 30px 0 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    border-radius: 5px;
  }

  button code {
    color: ${path => path.theme.colors.title};
    font-size: 20px;
    line-height: 30px;
    margin-left: 20px;
  }

  button div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .icon-arrow {
    color: ${path => path.theme.colors.body};
  }

  #accordion {
    width: 100%;
    height: 0;
    overflow: hidden;

    h5 {
      border-bottom: 1px solid ${props => props.theme.colors.secondaryBorder};
      width: 100%;
      padding: 20px;
    }
  }

  #accordion.open {
    border-style: solid;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-width: 1px;
    height: auto;
  }

  .accordion-section-container {
    padding: 20px;
  }

  .accordion-row {
    display: flex;
  }

  .accordion-title-container {
    padding: 15px 0 15px 0;
    border-bottom: 1px solid ${props => props.theme.colors.secondaryBorder};
  }

  .accordion-col-left {
    width: 200px;

    h4, code, p {
      padding: 10px 0 10px 0;
    }

    p {
      font-size: 12px;
      font-style: italic;
    }
  }

  .accordion-col-right {
    width: 100%;
    overflow: auto;

    p {
      padding: 10px 0 10px 0;
      line-height: 1.5;
    }
  }

  .top-border {
    border-top: 1px solid ${props => props.theme.colors.secondaryBorder};
  }

  .hidden {
    height: 0;
    overflow: hidden;
  }

  @media ${props => props.theme.devices.mobileL} {
    button code {
      font-size: 15px;
      line-height: 30px;
      margin-left: 10px;
    }

    .accordion-col-left {
      width: 100px;
    }
  }
`;
