import { cva } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonVariants = cva({ base: "cursor-pointer" });

export default function Button({ className, ...props }: ButtonProps) {
  return <button className={ButtonVariants({ className })} {...props} />;
}
