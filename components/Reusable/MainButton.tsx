import type { ComponentProps } from "react";
import { Button } from "../ui/button";

type ButtonVariant = ComponentProps<typeof Button>["variant"];
type ButtonSize = ComponentProps<typeof Button>["size"];

interface Button { text: string; variant?: ButtonVariant; size?: ButtonSize, px?: string, py?: string }

export default function MainButton({ text, variant, size, px, py }: Button) {
  return (
    <Button size={size} variant={variant ?? "default"} className={` rounded-3xl w-fit   ${px ?? "px-6"} ${py ?? "py-4"} shadow-md font-bold `}>
      {text}
    </Button>
  );
}
