export interface IErrorResponse {
  headers: Headers;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: Error;
}

export interface IError {
  timestamp: string;
  status: number;
  error: string;
  trace: string;
  message: string;
  path: string;
}

export interface IHeaders {
  normalizedNames: INormalizedNames;
  lazyUpdate: null;
}

export interface INormalizedNames {}
