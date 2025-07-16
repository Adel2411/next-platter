import { ApiError, ErrorWithMessage } from "@/types";
import { showErrorToast } from "./toastHandler";

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as ErrorWithMessage).message === "string"
  );
}

function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "data" in error
  );
}

export function handleError(error: unknown): string {
  // Log the error for debugging
  console.log(error);

  let errorMessage = "An unexpected error occurred. Please try again.";

  // Handle specific error types
  if (isApiError(error)) {
    errorMessage = error.data.message || `API Error: ${error.status}`;
  } else if (isErrorWithMessage(error)) {
    errorMessage = error.message;
  }

  // Display the error as a toast
  showErrorToast(errorMessage);

  return errorMessage;
}
