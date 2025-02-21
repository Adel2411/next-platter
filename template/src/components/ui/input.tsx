import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

function Input({
  className,
  type,
  disabled,
  ...props
}: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative" data-slot="input-container">
      <input
        type={type === "password" && showPassword ? "text" : type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        disabled={disabled}
        data-slot="input"
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          disabled={disabled}
          onClick={togglePasswordVisibility}
          className="disabled:opacity-50 absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          data-slot="toggle-password-visibility"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}

export { Input };
