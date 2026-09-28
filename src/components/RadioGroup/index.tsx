"use client";

import clsx from "clsx";
import { Text14, Text16 } from "@/src/components/Text";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string | boolean;
  optional?: boolean;
}

export default function RadioGroup({
  name,
  label,
  options,
  value,
  onChange,
  error,
  optional,
}: RadioGroupProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-1 mb-3">
        <Text16 className="font-semibold text-gray-800">{label}</Text16>
        {!optional && <span className="text-red-500">*</span>}
      </div>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
              "border border-gray-200 hover:border-orange-300 hover:bg-orange-50",
              value === option.value && "border-orange-500 bg-orange-50",
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-orange-500 accent-orange-500"
            />
            <Text14 className="text-gray-700">{option.label}</Text14>
          </label>
        ))}
      </div>
      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
}
