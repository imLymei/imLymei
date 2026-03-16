import { cx } from "@/lib/utils";

type PathProps = React.HTMLAttributes<HTMLDivElement>;

export default function Patch({ children, className, ...props }: PathProps) {
  return (
    <div className={cx("rounded-full p-1", className)} {...props}>
      <div className="rounded-full border-2 border-dashed border-neutral-50/50 px-4 py-1 lg:py-2">
        {children}
      </div>
    </div>
  );
}
