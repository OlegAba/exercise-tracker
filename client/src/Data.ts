import { HeaderData } from './components/header/Header.interface';
import { EndpointData, Method } from './components/endpoint/Endpoint.interface';

export const headerData: HeaderData = {
  title: "Exercise Tracker API",
  apiURL: "https://exercise-tracker-fcc.fly.dev/api",
  description: "This is a sample Exercise Tracker server",
  sourceURL: "https://github.com/OlegAba/exercise-tracker"
}

export const endpointData: EndpointData = {
  name: 'users',
  description: 'Create and retrieve users and their corresponding exercises',
  methodsData: [
    {
      method: Method.POST,
      endpoint: '/api/users',
      params: [
        {
          name: 'username',
          type: 'string',
          apiInterface: 'form-data',
          description: 'A valid and unique username',
          sampleInput: '{ \n  "username": "JohnDoe"\n}'
        }
      ],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '{ \n  "username": "johndoe",\n  "_id": "637c421509311815834b0be9",\n}\n'
        },
        {
          statusCode: 400,
          description: 'Invalid username provided',
          sampleRes: '{ \n  "error": "Username cannot be undefined or empty"\n}'
        }
      ]
    },
    {
      method: Method.GET,
      endpoint: '/api/users',
      params: [],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '[\n { \n  "username": "johndoe",\n  "_id": "637c421509311815834b0be9",\n },\n { \n  "username": "david",\n  "_id": "637310a3d9739e49d13d6f5a",\n } \n]'
        }
      ]
    }, 
    {
      method: Method.POST,
      endpoint: '/api/users/{id}/exercises',
      params: [
        {
          name: 'id',
          type: 'string',
          apiInterface: 'path',
          description: 'A valid user ID',
          sampleInput: '/api/users/637c421509311815834b0be9/exercises'
        },
        {
          name: 'description',
          type: 'string',
          apiInterface: 'form-data',
          description: 'A non-empty description',
          sampleInput: '{ \n  "description": "Exercise 1"\n}'
        },
        {
          name: 'duration',
          type: 'number',
          apiInterface: 'form-data',
          description: 'A non-empty duration',
          sampleInput: '{ \n  "duration": 60\n}'
        },
        {
          name: 'date',
          type: 'string?',
          apiInterface: 'form-data',
          description: 'An optional date in "YYYY-MM-DD" format. The current date will be used if one is not provided',
          sampleInput: '{ \n  "date": "2022-11-21"\n}'
        }
      ],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '{ \n  "_id": "637c421509311815834b0be9",\n  "username": "johndoe",\n  "description": "Exercise 1",\n  "duration": 60,\n  "date": "Mon Nov 21 2022",\n}\n'
        },
        {
          statusCode: 400,
          description: 'Invalid user ID',
          sampleRes: '{ \n  "error": "Invalid id"\n}'
        },
        {
          statusCode: 400,
          description: 'Empty or invalid description provided',
          sampleRes: '{ \n  "error": "Description cannot be undefined or empty"\n}'
        },
        {
          statusCode: 400,
          description: 'Empty or invalid duration provided',
          sampleRes: '{ \n  "error": "Duration cannot be undefined or empty"\n}'
        },
        {
          statusCode: 400,
          description: 'Invalid date provided',
          sampleRes: '{ \n  "error": "Date must be in YYYY-MM-DD format"\n}'
        }
      ]
    },
    {
      method: Method.GET,
      endpoint: '/api/users/{id}/logs',
      params: [
        {
          name: 'id',
          type: 'string',
          apiInterface: 'path',
          description: 'A valid user ID',
          sampleInput: '/api/users/637c421509311815834b0be9/logs'
        },
        {
          name: 'from',
          type: 'string?',
          apiInterface: 'query',
          description: 'An optional from date',
          sampleInput: '{ \n  "from": "2022-05-01"\n}'
        },
        {
          name: 'to',
          type: 'string?',
          apiInterface: 'query',
          description: 'An optional to date',
          sampleInput: '{ \n  "from": "2022-09-01"\n}'
        },
        {
          name: 'limit',
          type: 'number?',
          apiInterface: 'query',
          description: 'An optional limit',
          sampleInput: '{ \n  "limit": 2\n}'
        }
      ],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '{ \n  "username": "johndoe",\n  "count": 2,\n  "_id": "637c421509311815834b0be9",\n  "log": [\n       {\n         "description": "Exercise 1",\n         "duration": 60,\n         "date": "Mon Nov 21 2022"\n       }\n  ]\n}'
        },
        {
          statusCode: 400,
          description: 'Invalid user ID',
          sampleRes: '{ \n  "error": "Invalid id"\n}'
        },
        {
          statusCode: 400,
          description: 'Invalid date provided',
          sampleRes: '{ \n  "error": "Date must be in YYYY-MM-DD format"\n}'
        },
        {
          statusCode: 400,
          description: 'Invalid limit provided',
          sampleRes: '{ \n  "error": "Limit must be a number"\n}'
        }
      ]
    }
  ]
}