export type ErrorWithMessage = {
  message: string;
};

export type ApiError = {
  status: number;
  data: {
    message?: string;
  };
};

export type Feature = {
  id: string;
  title: string;
  description: string;
};
