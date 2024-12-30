import React from "react";
import { option } from "@/interfaces";

interface Props {
  label: string;
  value: string;
  onSelectChange: (newValue: string) => void; // Función para manejar el cambio en el select
  options: option[];
}

export const SelectUI = ({ label, value, onSelectChange, options }: Props) => {
  return (
    <div className="mx-10 my-4 text-left">
      <label className="w-80 mb-">{label}</label>
      <select
        id="course"
        name="course"
        value={value}
        onChange={(e) => onSelectChange(e.target.value)}
        className="w-full my-2 rounded-md bg-white py-1.5 pl-2 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
      >
        <option value="0">Seleccionar</option>
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
