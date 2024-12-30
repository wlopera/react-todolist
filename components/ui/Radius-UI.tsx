import type { group } from "@/interfaces";
import React from "react";

interface Props {
  label: string;
  selectedValue: string;
  onRadiusChange: (newValue: string) => void; // Función para manejar el cambio en el select
  groups: group[];
}

export const RaidusUI = ({
  label,
  selectedValue,
  onRadiusChange,
  groups,
}: Props) => {
  return (
    <div className="grid grid-cols-1 mx-10 my-2">
      <label className="w-80 text-left mb-2">{label}</label>
      {groups.map((group) => (
        <div className="form-check text-left" key={group.option}>
          <input
            className="form-check-input"
            type="radio"
            id={group.option}
            value={selectedValue}
            checked={selectedValue === group.option}
            onChange={() => {
              onRadiusChange(group.option);
            }}
          />
          <label
            className="m-2 form-check-label hover:border-b-2 pointer"
            onClick={() => {
              onRadiusChange(group.option);
            }}
          >
            {group.text}
          </label>
        </div>
      ))}
    </div>
  );
};
