import toast from "react-hot-toast";

export function showErrorToast(message: string): void {
  toast.error(message);
}

export function showSuccessToast(message: string): void {
  toast.success(message);
}

export function showNeutralToast(message: string): void {
  toast(message);
}

export function showPromiseToast(
  promise: Promise<unknown>,
  message: string,
): void {
  toast.promise(promise, {
    loading: "Loading...",
    success: "Operation successful!",
    error: "Operation failed!",
    ...{ description: message },
  });
}
