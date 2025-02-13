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
    variant: "success",
    title: "Success",
    description: message,
  });
}

export function showNeutralToast(message: string): void {
  toast({
    variant: "default",
    title: "Neutral",
    description: message,
  });
}
