import React, { FunctionComponent, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { StyledEndpointMethod } from './EndpointMethod.styled';
import { MethodData, MethodParam, MethodCode, Method } from '../Endpoint.interface';
import { 
  atelierEstuaryDark,
  atelierForestLight 
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  active: boolean,
  isDarkMode: boolean,
  data: MethodData
}

const EndpointMethod: FunctionComponent<Props> = ({
  active,
  isDarkMode,
  data 
}) => {

  const [isActive, setIsActive] = useState(active);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsActive(!isActive);
  };

  const methodColor = (method: Method): string => {
    const className = '-accent';

    switch(method) {
      case Method.GET: return('blue' + className);
      case Method.DELETE: return('red' + className);
      case Method.POST: return('green' + className);
      case Method.PUT: return('yellow' + className);
    }
  }

  const syntaxHighlighter = (code: string) => {
    return (
      <SyntaxHighlighter 
        language='javascript' 
        style={isDarkMode ? atelierEstuaryDark : atelierForestLight}
        customStyle={{ 
          padding: 15,
          marginTop: 5 
        }}>
          {code}
      </SyntaxHighlighter>
    );
  }

  return(
    <StyledEndpointMethod>
      <div className={methodColor(data.method)}>
        <button onClick={buttonHandler} className={isActive ? "open" : ""}>
          <div className='method-container'>
            <span>{data.method}</span>
          </div>
          <div className='method-endpoint-container'>
            <code>{data.endpoint}</code>
          </div>
          <div className='arrow-container'>
            {isActive 
            ? <RiArrowUpSLine className='icon-arrow' size='30px' />
            : <RiArrowDownSLine className='icon-arrow' size='30px' />}
          </div>
        </button>

        <div id='accordion' className={isActive ? "open" : ""}>
          <div className={data.params.length === 0 ? 'hidden' : ''}>
            <h5>Parameters</h5>
            <div className='accordion-section-container'>
              <div className='accordion-title-container accordion-row'>
                <h6 className='accordion-col-left'>Name</h6>
                <h6 className='accordion-col-right'>Description</h6>
              </div>

              {data.params.map((param: MethodParam, index: number) =>
                <div className='accordion-row' key={index}>
                  <div className='accordion-col-left'>
                    <h4>{param.name}</h4>
                    <code>{param.type}</code>
                    <p>({param.apiInterface})</p>
                  </div>
                  <div className='accordion-col-right'>
                    <p>{param.description}</p>
                      {syntaxHighlighter(param.sampleInput)}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={data.codes.length === 0 ? 'hidden' : ''}>
            <h5 className='top-border'>Responses</h5>
            <div className='accordion-section-container'>
              <div className='accordion-title-container accordion-row'>
                <h6 className='accordion-col-left'>Code</h6>
                <h6 className='accordion-col-right'>Description</h6>
              </div>

              {data.codes.map((code: MethodCode, index: number) => 
                <div className='accordion-row' key={index}>
                  <div className='accordion-col-left'>
                    <p>{code.statusCode}</p>
                  </div>
                  <div className='accordion-col-right'>
                    <p>{code.description}</p>
                    {syntaxHighlighter(code.sampleRes)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledEndpointMethod>
  );
}

export default EndpointMethod;