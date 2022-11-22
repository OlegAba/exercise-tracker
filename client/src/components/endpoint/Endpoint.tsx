import React, { FunctionComponent } from 'react';
import { StyledEndpoint } from './Endpoint.styled';
import EndpointMethod from './endpointMethod/EndpointMethod';
import { EndpointData, MethodData } from './Endpoint.interface';

interface Props {
  active: boolean,
  isDarkMode: boolean,
  endpointData: EndpointData,
}

const Endpoint: FunctionComponent<Props> = ({ 
  active,
  isDarkMode,
  endpointData 
}) => {

  return(
    <StyledEndpoint>
      <div className='endpoint-header-container'>
        <div className='endpoint-title-container'>
          <h2>{ endpointData.name }</h2>
        </div>
        <div className='endpoint-description-container'>
        <p>{ endpointData.description }</p>
        </div>
      </div>

      {endpointData.methodsData.map((methodData: MethodData, index: number) => 
        <div className='methods-container' key={index}>
          <EndpointMethod 
            active={active}
            isDarkMode={isDarkMode}
            data={methodData}
          />
        </div>
      )}
    </StyledEndpoint>
  );
}

export default Endpoint