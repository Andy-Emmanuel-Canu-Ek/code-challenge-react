import React from "react";
import Swal from 'sweetalert2';
export const ItemListScreen = ({ item }) => {
  const { index, id, name, email, pass } = item;

  const handleDelete: any = (item: Object) => {
    Swal.fire({
        title: 'Eliminar usuario',
        text: '¿Seguro que desea eliminar este usuario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'No'
      }).then((result) => {
        console.log(result);
      })
  }

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
