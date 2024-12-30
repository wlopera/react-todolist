import React from "react";

import type { Column, Row, Action } from "@/interfaces";

import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

interface Props {
  columns: Column[];
  rows: Row[];
  actions: Action[];
}

export const TableUI = ({ columns, rows, actions = [] }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b">
          <tr>
            {columns &&
              columns.map(
                (column, index) =>
                  column.show && (
                    <th
                      key={`${column.accessor}-${index}`}
                      className="p-3 text-sm font-semibold text-center text-gray-700 uppercase tracking-wide"
                    >
                      {column.header}
                    </th>
                  )
              )}
            <th
              className="p-3 text-sm font-semibold text-center text-gray-700 uppercase tracking-wide"
              colSpan={actions.length}
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`even:bg-gray-50 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                {columns.map(
                  (column) =>
                    column.show && (
                      <td
                        key={column.accessor}
                        className="p-3 text-sm text-gray-600 whitespace-nowrap"
                      >
                        {row[column.accessor as keyof Row]}
                      </td>
                    )
                )}
                {actions.map((btn, index) => (
                  <td key={`${btn.image}-${index}`} className="p-1">
                    <button
                      onClick={() => {
                        btn.handleClick(row);
                      }}
                      className={`px-2 py-1 text-sm font-medium text-white  focus:outline-none ${btn.style}`}
                    >
                      {btn.image === "delete" ? (
                        <MdDeleteForever className="w-6 h-6" />
                      ) : (
                        <RxUpdate className="w-6 h-6" />
                      )}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
