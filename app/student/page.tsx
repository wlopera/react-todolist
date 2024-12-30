import StudentForm from "@/components/form/StudentForm";
import { Row } from "@/interfaces";
import React from "react";
import { IoAddCircle } from "react-icons/io5";

interface Props {
  student: Row | null;
  onChangeStudent: (student: Row | null) => void;
}

export default function Student({ student, onChangeStudent }: Props) {
  return (
    <div>
      <div className="flex items-center justify-center text-4xl font-bold pb-5">
        <span>Alumno</span>
        <div className="ml-4 w-10 px-2 py-1 text-sm font-medium text-white focus:outline-none bg-custom-green">
          <IoAddCircle
            className="w-6 h-6"
            onClick={() => onChangeStudent(null)}
          />
        </div>
      </div>
      <StudentForm student={student} />
    </div>
  );
}
