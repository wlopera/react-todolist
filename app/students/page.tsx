import StudentTable from "@/components/table/StudentTable";
import { Row } from "@/interfaces";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  onChangeStudent: (student: Row) => void;
  onDeleteStudent: (id: string) => void;
}

export default function Students({ onChangeStudent, onDeleteStudent }: Props) {
  const students = useSelector((state: RootState) => state.students.students);
  return (
    <div>
      <div className="flex items-center justify-center text-4xl font-bold pb-5">
        <span>Lista de Alumnos</span>
        <div className="ml-4 w-10 px-2 py-1 rounded-full text-2xl text-white focus:outline-none bg-custom-green">
          {students.length}
        </div>
      </div>
      <StudentTable
        onChangeStudent={onChangeStudent}
        onDeleteStudent={onDeleteStudent}
      />
    </div>
  );
}
