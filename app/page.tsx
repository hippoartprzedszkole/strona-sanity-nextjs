import { LANGS } from "@/src/types/langs";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect(`/${LANGS.POLISH}`);
}
