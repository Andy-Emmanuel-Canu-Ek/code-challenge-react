import React from 'react'
import Swal from 'sweetalert2'
export const handleMessage = (data) => {
    Swal.fire('Exito', data.msg, 'success')
}

export const handleMessageError = (data) => {
    let msg_error;
    if(!data.msg && data.erros?.length > 0){
       msg_error=  data.erros.reduce((accumulator, currentValue) => accumulator + currentValue, "");
    }
    Swal.fire('Ocurrio un error', data.msg || msg_error || "Ha ocurrido un error al tratar de realizar la peticion. Por favor contactese con el administrador", 'error')
}