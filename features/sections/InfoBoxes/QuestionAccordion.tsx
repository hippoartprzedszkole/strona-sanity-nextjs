"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "@/src/components/Image";
import { Text12, Text14 } from "@/src/components/Text";
import { ISanityImage } from "@/src/types/common";
import { IInfoBoxesQuestion } from "./types";

export default function QuestionAccordion({
  questionList,
  plusIcon,
}: {
  questionList: IInfoBoxesQuestion[];
  plusIcon: ISanityImage;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="flex flex-col">
      {questionList?.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <li
            key={item._key ?? i}
            className="border-b border-gray-light last:border-b-0"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-3 py-1.5 text-left"
            >
              <Text14 className="font-bold">{item.question}</Text14>
              <Image
                sanityImage={plusIcon}
                className={clsx(
                  "h-auto w-6 shrink-0 object-contain transition-transform duration-200",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              className={clsx(
                "grid transition-all duration-200",
                isOpen ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]",
              )}
            >
              <Text12 className="overflow-hidden whitespace-pre-line text-text">
                {item.answer}
              </Text12>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
