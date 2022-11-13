export interface MethodParam {
  name: string,
  type: string,
  apiInterface: string,
  description: string,
  sampleInput: string
}

export interface MethodCode {
  statusCode: number,
  description: string,
  sampleRes: string  
}

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface MethodData {
  method: Method,
  endpoint: string,
  params: MethodParam[],
  codes: MethodCode[]
}

export interface EndpointData {
  name: string,
  description: string,
  methodsData: MethodData[]
}