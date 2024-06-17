export class ResponseError extends Error {
  response: Response;

  constructor(message: string, response: Response) {
    super(message);
    this.response = response;

    Object.setPrototypeOf(this, ResponseError.prototype);
  }
}

export async function fetchWrapper(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new ResponseError('Bad fetch response', response);
  }

  return response;
}
