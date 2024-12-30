import React from "react";

interface Props {
  label: string;
  value: string;
  onInputChange: (newValue: string) => void; // Función para manejar el cambio en el input
  type?: string; // Opción para personalizar el tipo de entrada (por defecto "text")
}

export const InputUI = ({ label, value, onInputChange, type }: Props) => {
  return (
    <div className="grid grid-cols-1 mx-10 my-2">
      <label className="w-80 text-left mb-2" htmlFor="input-name">
        {label}
      </label>
      <input
        type={type}
        id="input-name"
        className="w-full text-left pl-2 border-2"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};
