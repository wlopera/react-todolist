import { studentsData } from "@/data/data";
import { Row } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
  students: Row[];
}

const initialState: StudentState = {
  students: studentsData,
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Row>) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action: PayloadAction<string>) => {
      const studentId = action.payload;
      const index = state.students.findIndex(
        (student) => student.id === studentId
      );
      if (index === -1) {
        throw new Error("Estudiante no encontrado");
      }

      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },

    updateStudent: (state, action: PayloadAction<Row>) => {
      state.students = state.students.map((student) => {
        if (student.id === action.payload.id) {
          student = action.payload;
        }
        return student;
      });
    },
  },
});

export const { addStudent, removeStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
