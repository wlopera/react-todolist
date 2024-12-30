"use client";

import React from "react";
import { columnsData } from "@/data/data";
import { TableUI } from "@/components";
import type { Row } from "@/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface Props {
  onChangeStudent: (student: Row) => void;
  onDeleteStudent: (id: string) => void;
}

export default function StudentTable({
  onChangeStudent,
  onDeleteStudent,
}: Props) {
  const studentsData = useSelector(
    (state: RootState) => state.students.students
  );

  const actions = [
    {
      image: "delete",
      handleClick: (row: Row) => {
        onDeleteStudent(row.id);
      },
      style: "bg-custom-red-wine rounded-lg hover:bg-red-400",
    },
    {
      image: "update",
      handleClick: (row: Row) => {
        onChangeStudent(row);
      },
      style: "bg-custom-green rounded-lg hover:bg-green-400",
    },
  ];

  return (
    <TableUI columns={columnsData} rows={studentsData} actions={actions} />
  );
}
