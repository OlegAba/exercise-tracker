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
      <div className='title-container noselect'>
        <h2>{endpointData.name}</h2>
        <p>{endpointData.description}</p>
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