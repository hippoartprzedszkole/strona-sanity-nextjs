import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import clsx from "clsx";
import { Text14 } from "./Text";

interface IPrimaryTextInput {
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  Imagine?: string;
  error?: undefined | string | boolean;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: HTMLInputTypeAttribute;
  textArea?: boolean;
  placeholder?: string;
}

const PrimaryTextInput = ({
  label,
  placeholder,
  onChange,
  value,
  error,
  onBlur,
  type = "text",
  textArea,
}: IPrimaryTextInput) => {
  const InputComponent = textArea ? "textarea" : "input";
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {label && <Text14 className="text-black/70 self-start">{label}</Text14>}
      <InputComponent
        className={clsx(
          "m-4 py-4 border-b w-full bg-transparent",
          "font-normal text-sm text-[#212427] placeholder-[#ADA4A5]",
          "focus:outline-none",
          "resize-none",
          {
            "border-b-[#B22222]": error,
            "border-b-[#212427]": !error,
          }
        )}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        type={type}
        rows={textArea ? 4 : undefined}
      />
      <span
        className={clsx(
          "text-[#B22222] font-semibold text-xs h-12 text-right w-full"
        )}
      >
        {error || ""}
      </span>
    </div>
  );
};

export default PrimaryTextInput;
