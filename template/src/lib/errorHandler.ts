import { toast } from "@/hooks/use-toast";
import { ApiError, ErrorWithMessage } from "@/types";

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
  console.error(error);

  let errorMessage = "An unexpected error occurred. Please try again.";

  // Handle specific error types
  if (isApiError(error)) {
    errorMessage = error.data.message || `API Error: ${error.status}`;
  } else if (isErrorWithMessage(error)) {
    errorMessage = error.message;
  }

  // Display the error as a toast
  toast({
    variant: "destructive",
    title: "Error",
    description: errorMessage,
  });

  return errorMessage;
}
