import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined');
}

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ApiRequestOptions {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

const httpGet = async (endpoint: string, options?: ApiRequestOptions) => {
  try {
    const response = await instance.get(endpoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`GET request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPost = async (
  endpoint: string,
  data?: unknown,
  options?: ApiRequestOptions
) => {
  try {
    const response = await instance.post(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });

    return response.data;
  } catch (error) {
    console.error(`POST request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPut = async (
  endpoint: string,
  data?: unknown,
  options?: ApiRequestOptions
) => {
  try {
    const response = await instance.put(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`PUT request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpDelete = async (endpoint: string, options?: ApiRequestOptions) => {
  try {
    const response = await instance.delete(endpoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`DELETE request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPatch = async (
  endpoint: string,
  data?: unknown,
  options?: ApiRequestOptions
) => {
  try {
    const response = await instance.patch(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`PATCH request to ${endpoint} failed:`, error);
    throw error;
  }
};

export const httpClient = {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  delete: httpDelete,
  patch: httpPatch,
};
