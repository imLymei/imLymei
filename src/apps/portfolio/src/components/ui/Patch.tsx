import { cx } from "@/lib/utils";

type PathProps = React.HTMLAttributes<HTMLDivElement>;

export default function Patch({ children, className, ...props }: PathProps) {
  return (
    <div className={cx("p-1 rounded-full", className)} {...props}>
      <div className="py-1 lg:py-2 px-4 border-2 border-dashed border-neutral-50/50  rounded-full">
        {children}
      </div>
    </div>
  );
}
