import Swal from 'sweetalert2'
export const handleMessage = (data) => {
    Swal.fire('Exito', data.msg, 'success')
}

export const handleMessageError = (data) => {
    let msg_error;
    console.log('errrr', data.errors);
    if(!data.msg && data.errors){
       msg_error = Object.keys(data.errors).map((item: any) => {
           return data.errors[item].msg
       })

       msg_error = msg_error.reduce((currentText, nextText) => currentText + nextText, "")
    }
    Swal.fire('Ocurrio un error', data.msg || msg_error || "Ha ocurrido un error al tratar de realizar la peticion. Por favor contactese con el administrador", 'error')
}