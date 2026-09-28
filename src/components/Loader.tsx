import { GlassBackground } from "@/src/components/GlassBackground";
import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[999999]">
      <GlassBackground>
        <BeatLoader color="#000" loading={true} size={30} />
      </GlassBackground>
    </div>
  );
}
