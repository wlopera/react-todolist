"use client";

import React, { useEffect, useState } from "react";
import { InputUI, SelectUI, RaidusUI, CheckUI } from "@/components";
import { groups, options } from "@/data/data";
import { Row } from "@/interfaces";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "@/store/studentSlice";
import { nanoid } from "nanoid";

// Importando la biblioteca nextjs-toast-notify
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

interface Props {
  student: Row | null;
}

const getKeyCourse = (value: string) => {
  const option = options.find((item) => item.value === value);

  return option ? option.key : "0";
};

const getNameCourse = (value: string) => {
  const option = options.find((item) => item.key === value);

  return option ? option.value : "Seleccionar";
};

export default function StudentForm({ student }: Props) {
  const [typeAction, setTypeAction] = useState<string>("ADD");

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "0",
    name: "",
    course: "0",
    selectedValue: "Masculino",
    isChecked: false,
  });

  const validateData = () => {
    if (formData.name.trim().length === 0) {
      toast.error("¡El nombre del Alumno es obligatorio!", {
        duration: 2000,
        progress: true,
        position: "top-right",
        transition: "bottomToTopBounce",
        icon: "",
        sonido: true,
      });
      return false;
    }
    if (formData.course === "0") {
      toast.error("¡El curso del Alumno es obligatorio!", {
        duration: 2000,
        progress: true,
        position: "top-right",
        transition: "bottomToTopBounce",
        icon: "",
        sonido: true,
      });
      return false;
    }
    return true;
  };

  const handleUpdateStudent = () => {
    if (!validateData()) {
      return;
    }

    try {
      const row = {
        id: formData.id,
        name: formData.name,
        course: getNameCourse(formData.course),
        gender: formData.selectedValue,
        language: formData.isChecked === true ? "Si" : "No",
      };

      dispatch(typeAction === "ADD" ? addStudent(row) : updateStudent(row));

      const message =
        typeAction === "ADD"
          ? `[${formData.id}]: se agregó con exito!`
          : `[${formData.id}]: se modiificó con exito!`;

      toast.success(message, {
        duration: 2000,
        progress: true,
        position: "top-right",
        transition: "bottomToTopBounce",
        icon: "",
        sonido: true,
      });

      setFormData({
        id: nanoid(8),
        name: "",
        course: "0",
        selectedValue: "Masculino",
        isChecked: false,
      });
    } catch (err) {
      toast.error("¡La operación no se realizó con éxito!", {
        duration: 2000,
        progress: true,
        position: "top-right",
        transition: "bottomToTopBounce",
        icon: "",
        sonido: true,
      });
      console.error(`[Error: ] ${err}`);
    }
  };

  useEffect(() => {
    if (student) {
      setFormData({
        id: student.id,
        name: student.name,
        course: getKeyCourse(student.course),
        selectedValue: student.gender,
        isChecked: student.language === "Si" ? true : false,
      });
      setTypeAction("UPDATE");
    } else {
      setFormData({
        id: nanoid(8),
        name: "",
        course: "0",
        selectedValue: "Masculino",
        isChecked: false,
      });
      setTypeAction("ADD");
    }
  }, [student]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleCheckChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      isChecked: !prevState.isChecked,
    }));
  };

  return (
    <div>
      <div className="w-720 text-left mb-2 mx-10 text-ms bg-gray-200">
        <label>{formData.id}</label>
      </div>

      <InputUI
        label="Nombre del Alumno"
        value={formData.name}
        onInputChange={(value) => handleInputChange("name", value)}
      />

      <SelectUI
        label="Curso del Alumno"
        value={formData.course}
        onSelectChange={(value) => handleInputChange("course", value)}
        options={options}
      />

      <RaidusUI
        label="Sexo del Alumno"
        selectedValue={formData.selectedValue}
        onRadiusChange={(value) => handleInputChange("selectedValue", value)}
        groups={groups}
      />

      <CheckUI
        label="¿Habla Inglés?"
        checked={formData.isChecked}
        onChange={handleCheckChange}
        textTrue="Si"
        textFalse="No"
      />
      <button
        className="w-full bg-custom-green rounded p-2 text-white mt-2"
        onClick={handleUpdateStudent}
      >
        {typeAction === "ADD" ? "Agregar Alumno" : "Modificar Alumno"}
      </button>
    </div>
  );
}
