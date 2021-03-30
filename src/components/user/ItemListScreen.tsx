import React from "react";
export const ItemListScreen = ({ item, handleDelete }) => {
  const { index, name, email } = item;

  
  return (
    <>
      <tr>
        <th scope="row">{index}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>**********</td>
        <td>
          <button 
          type="button" 
          className="btn btn-outline-danger"
          onClick={() => handleDelete(item)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
