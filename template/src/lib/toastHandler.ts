import toast from "react-hot-toast";

// Define base styles for toasts
const baseToastStyles = {
  style: {
    background: "var(--background)",
    color: "var(--foreground)",
  },
  iconTheme: {
    primary: "var(--primary)",
    secondary: "var(--primary-foreground)",
  },
};

// Define specific styles for error toasts
const errorToastStyles = {
  ...baseToastStyles,
  style: {
    ...baseToastStyles.style,
    background: "var(--destructive)",
    color: "var(--destructive-foreground)",
  },
};

// Define specific styles for success toasts
const successToastStyles = {
  ...baseToastStyles,
  style: {
    ...baseToastStyles.style,
    background: "green",
    color: "white",
  },
};

export function showErrorToast(message: string): void {
  toast.error(message, errorToastStyles);
}

export function showSuccessToast(message: string): void {
  toast.success(message, successToastStyles);
}

export function showNeutralToast(message: string): void {
  toast(message, baseToastStyles);
}

export function showPromiseToast(
  promise: Promise<unknown>,
  message: string,
): void {
  toast.promise(
    promise,
    {
      loading: "Loading...",
      success: "Operation successful!",
      error: "Operation failed!",
      ...{ description: message },
    },
    baseToastStyles,
  );
}
