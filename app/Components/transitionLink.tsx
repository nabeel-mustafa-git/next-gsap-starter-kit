"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../utils/animation";

interface Props {
  href: string;
  label: string;
  className?: string;
}

const TransitionLink = ({ href, label, className }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <button className={className || "cursor-pointer"} onClick={handleClick}>
      {label}
    </button>
  );
};

export default TransitionLink;
