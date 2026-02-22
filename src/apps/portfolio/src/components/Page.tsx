import { cx } from "@/lib/utils";

type PageProps = React.HTMLAttributes<HTMLDivElement>;

export default function Page({ className, ...props }: PageProps) {
  return <div className={cx("container mx-auto", className)} {...props} />;
}
