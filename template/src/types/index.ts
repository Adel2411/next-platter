export type ErrorWithMessage = {
  message: string;
};

export type ApiError = {
  status: number;
  data: {
    message?: string;
  };
};
