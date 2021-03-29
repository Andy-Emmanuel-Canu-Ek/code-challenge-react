import React from "react";
import { ItemListScreen } from "./ItemListScreen";

const userList = [
    {
        id: 1,
        pass: "dasdas",
        name: "andy",
        email: "caasdasdasd",
    },
    {
        id: 1,
        pass: "",
        name: "andy3",
        email: "caasdasdasdfsdf",
    },
    {
        id: 1,
        pass: "",
        name: "andy4",
        email: "caasdasdasdfsdf",
    },
]
export const ListUserScreen = () => {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Pass</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
            { userList.map((item, idx) => <ItemListScreen item={{index: (idx + 1), ...item}} />) }
        </tbody>
      </table>
    </div>
  );
};
