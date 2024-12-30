import React from "react";

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void; // Función para manejar el cambio en el check
  textTrue: string;
  textFalse: string;
}

export const CheckUI = ({
  label,
  checked,
  onChange,
  textTrue,
  textFalse,
}: Props) => {
  return (
    <div className="grid grid-cols-1 mx-10 my-2">
      <label className="w-80 text-left mb-2">{label}</label>
      <div className="flex items-center space-x-4">
        <button
          aria-label={checked ? "Activado" : "Desactivado"}
          type="button"
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer focus:outline-none transition duration-300 ${
            checked ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={onChange}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              checked ? "translate-x-6" : ""
            }`}
          ></div>
        </button>

        <label className="text-gray-700 select-none">
          {checked ? textTrue : textFalse}
        </label>
      </div>
    </div>
  );
};
