import type { ChangeEvent } from "react";

interface FieldProps {
  label: string;
  name: string;
  value: string | number | Date;
  editMode: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Field({ label, name, value, editMode, onChange }: FieldProps) {
  const isDate = value instanceof Date;

  const displayValue = isDate
    ? (value as Date).toLocaleDateString()
    : value;

  const inputValue = isDate
    ? formatDateLocal(value as Date)
    : value;

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-lg" htmlFor={name}>
        {label}
      </label>

      {editMode ? (
        <input
          id={name}
          name={name}
          type={isDate ? "date" : typeof value === "number" ? "number" : "text"}
          value={inputValue}
          onChange={onChange}
          className="border border-gray-300 rounded px-2 py-1 w-full"
        />
      ) : (
        <p className="text-gray-700 px-2 py-1">{displayValue}</p>
      )}
    </div>
  );
}

function formatDateLocal(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}