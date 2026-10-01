import Button from "@/src/components/Button";
import Image from "@/src/components/Image";
import { useCommonComponentsContext } from "@/src/context/CommonComponentsContext";

export default function BookVisit() {
  const {
    header: { btnLabel, btnPhone, btnIcon, rightSideIcon },
  } = useCommonComponentsContext();

  return (
    <div className="flex items-center">
      <Button
        variant="pink"
        text={btnLabel}
        leftIcon={btnIcon}
        className="pl-12"
        onClick={() => {
          if (btnPhone) window.location.href = `tel:${btnPhone}`;
        }}
      />
      <Image sanityImage={rightSideIcon} className="ml-2 h-[72px] w-auto" />
    </div>
  );
}
