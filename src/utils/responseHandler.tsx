class ResponseError extends Error {
  constructor(message: string, response) {
    super(message);
    this.response = response;
  }
}

export async function fetchWrapper(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new ResponseError('Bad fetch response', response);
  }

  return response;
}
