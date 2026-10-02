import { IRichTextSection } from "./types";
import RichText from "@/src/components/RichText";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";

export default async function RichTextSection({ content }: IRichTextSection) {
  return (
    <section className="w-full my-8 lg:my-10">
      <SectionPaddingWrapper>
        <RichText value={content} className="font-menu text-navy" />
      </SectionPaddingWrapper>
    </section>
  );
}
