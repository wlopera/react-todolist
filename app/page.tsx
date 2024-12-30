"use client";

import { useState } from "react";
import Student from "./student/page";
import Students from "./students/page";
import type { Row } from "@/interfaces";
import { removeStudent } from "@/store/studentSlice";
import { useDispatch } from "react-redux";

// Importando la biblioteca nextjs-toast-notify
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

export default function Home() {
  const dispatch = useDispatch();

  const handleDeleteStudent = (id: string) => {
    try {
      dispatch(removeStudent(id));
      toast.success(`[${id}]: Se eliminó con éxito!`, {
        duration: 2000,
        progress: true,
        position: "top-right",
        transition: "bottomToTopBounce",
        icon: "",
        sonido: true,
      });
    } catch (error) {
      toast.error(`[${id}]: No se eliminó con éxito!`, {
        duration: 2000,
        progress: true,
        position: "top-right",
        transition: "bottomToTopBounce",
        icon: "",
        sonido: true,
      });
      console.error(`[Error: ], ${error}`);
    }
  };

  const [currentStudent, setSurrentStudent] = useState<Row | null>(null);
  return (
    <div className="bg-white mx-52 pb-10 pt-5 rounded-xl mt-16">
      <div className="text-3xl font-bold m-10 text-center border-b-2 mt-2">
        TO DO List NextJS-Tailwind!
      </div>
      <div className="grid grid-cols-3 gap-4 text-center mx-10">
        <Student student={currentStudent} onChangeStudent={setSurrentStudent} />
        <div className="col-span-2 text-center mx-10">
          <Students
            onChangeStudent={setSurrentStudent}
            onDeleteStudent={handleDeleteStudent}
          />
        </div>
      </div>
    </div>
  );
}
