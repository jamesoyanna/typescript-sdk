import fetch from "isomorphic-unfetch";

type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    // Set the API key and base URL for the class instance
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
  }

  protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    // Construct the URL for the request
    const url = `${this.baseUrl}${endpoint}`;
    // Set the headers for the request
    const headers = {
      "Content-Type": "application/json",
      "api-key": this.apiKey,
    };
    const config = Object.assign({}, options, { headers });

    const response = await fetch(url, config);
        // If the response is OK, parse the JSON and return it
    if (response.ok) {
      const data = await response.json();
      return data as T;
    }
      // If the response is not OK, throw an error
    throw new Error(response.statusText);
  }
}
