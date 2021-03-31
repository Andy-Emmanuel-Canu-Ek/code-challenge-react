import React from "react";
import { useSelector } from "react-redux";
export const ItemListScreen = ({ item, handleDelete }) => {
  const { user_id } = useSelector((state: any) => state.auth);

  const { _id, index, name, email } = item;

  return (
    <>
      <tr>
        <th scope="row">{index}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>**********</td>
        <td>
        {user_id !== _id.toString() && (
          
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => handleDelete(item)}
            >
              Eliminar
            </button>
        )}
        </td>
      </tr>
    </>
  );
};
