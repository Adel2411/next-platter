type FetchOptions = RequestInit & {
  headers?: Record<string, string>;
};

const fetchInstance = async <T>(
  url: string,
  options: FetchOptions = {},
  includeToken: boolean = true,
): Promise<T> => {
  const token = includeToken ? localStorage.getItem("token") : null;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

export default fetchInstance;
