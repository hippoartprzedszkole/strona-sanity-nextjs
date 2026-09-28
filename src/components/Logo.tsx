import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/logo/logo-vector-2.png"
      className={className}
      alt="logo"
      width={300}
      height={300}
    />
  );
}
