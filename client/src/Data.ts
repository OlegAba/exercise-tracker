import { EndpointData, Method } from './components/endpoint/Endpoint.interface';

export const dateEndpointData: EndpointData = {
  name: 'shorturl',
  description: 'Returns a JSON object with a compact ID of the original URL. Input the ID as a parameter to redirect to the original URL',
  methodsData: [
    {
      method: Method.POST,
      endpoint: '/api/shorturl',
      params: [
        {
          name: 'url',
          type: 'string',
          apiInterface: 'form-data',
          description: 'A valid URL',
          sampleInput: '{ \n  "url": "https://www.google.com"\n}'
        }
      ],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '{ \n  "original_url": "https://www.google.com",\n  "short_url": "4fc10e",\n}\n'
        },
        {
          statusCode: 400,
          description: 'Invalid URL provided',
          sampleRes: '{ \n  "error": "invalid url"\n}'
        }
      ]
    },
    {
      method: Method.GET,
      endpoint: '/api/shorturl/{short_url}',
      params: [
        {
          name: 'short_url',
          type: 'string',
          apiInterface: 'path',
          description: 'A valid ID',
          sampleInput: '/api/shorturl/4fc10e'
        }
      ],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: 'Redirect > https://www.google.com'
        },
        {
          statusCode: 400,
          description: 'Invalid ID provided',
          sampleRes: '{ \n  "error": "No short URL found for the given input"\n}'
        }
      ]
    }
  ]
}