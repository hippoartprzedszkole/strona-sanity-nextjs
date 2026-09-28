"use client";

import clsx from "clsx";
import { Text14, Text16 } from "@/src/components/Text";

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  name: string;
  label: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  error?: string | boolean;
  maxSelections?: number;
  optional?: boolean;
}

export default function CheckboxGroup({
  name,
  label,
  options,
  values,
  onChange,
  error,
  maxSelections,
  optional,
}: CheckboxGroupProps) {
  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      if (maxSelections && values.length >= maxSelections) {
        return;
      }
      onChange([...values, optionValue]);
    } else {
      onChange(values.filter((v) => v !== optionValue));
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center gap-1 mb-1">
        <Text16 className="font-semibold text-gray-800">{label}</Text16>
        {!optional && <span className="text-red-500">*</span>}
      </div>
      {maxSelections && (
        <Text14 className="text-gray-500 mb-3">(max {maxSelections})</Text14>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
              "border border-gray-200 hover:border-orange-300 hover:bg-orange-50",
              values.includes(option.value) && "border-orange-500 bg-orange-50",
              maxSelections &&
                values.length >= maxSelections &&
                !values.includes(option.value) &&
                "opacity-50 cursor-not-allowed",
            )}
          >
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={(e) => handleChange(option.value, e.target.checked)}
              disabled={
                !!(
                  maxSelections &&
                  values.length >= maxSelections &&
                  !values.includes(option.value)
                )
              }
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
