import React, { useEffect, useState } from "react";
import { getUserList, deleteUserId } from "../../services/authService";
import { ItemListScreen } from "./ItemListScreen";
import Swal from "sweetalert2";
import {
  handleMessage,
  handleMessageError,
} from "../../helpers/handleMessages";

export const ListUserScreen = () => {
  const [userList, setuserLis] = useState([]);

  useEffect(() => {
    getUserItems();
  }, []);

  const getUserItems = async () => {
    const data = await getUserList();
    if (data.ok) {
      setuserLis(data.user_list);
    } else {
      handleMessageError(data);
    }
  };

  const handleDelete: any = (item: Object) => {
    Swal.fire({
      title: "Eliminar usuario",
      text: "¿Seguro que desea eliminar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "No",
    }).then((result) => {
      const { _id: user_id }: any = item;
      if (result.isConfirmed) {
        console.log(user_id);
        deleteUser(user_id);
      }
    });
  };

  const deleteUser = async (id) => {
    const data = await deleteUserId(id);
    if (data.ok) {
      handleMessage(data);
      getUserItems();
    } else {
      handleMessageError(data);
    }
  };

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
          {userList.map((item: Object, idx) => (
            <ItemListScreen
              key={idx}
              item={{ index: idx + 1, ...item }}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
