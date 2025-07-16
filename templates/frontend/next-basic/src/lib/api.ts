import { handleError } from "./errorHandler";

type FetchOptions = RequestInit & {
  headers?: Record<string, string>;
};

const fetchInstance = async <T>(
  url: string,
  options: FetchOptions = {},
  token?: string,
): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})); // Parse error response
      throw {
        status: response.status,
        data: errorData,
      };
    }

    return response.json() as Promise<T>;
  } catch (error) {
    throw handleError(error); // Use centralized error handling with toasts
  }
};

export default fetchInstance;
