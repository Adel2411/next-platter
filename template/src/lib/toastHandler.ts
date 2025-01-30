import { toast } from "@/hooks/use-toast";

export function showErrorToast(message: string): void {
  toast({
    variant: "destructive",
    title: "Error",
    description: message,
  });
}

export function showSuccessToast(message: string): void {
  toast({
    variant: "default",
    title: "Success",
    description: message,
  });
}
