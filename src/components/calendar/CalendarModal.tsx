import moment from "moment";
import validator from 'validator'
import Swal from "sweetalert2";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { saveEvent, deleteEvent} from "../../services/eventService";
import { handleMessage, handleMessageError } from "../../helpers/handleMessages";
import { formatEventList } from "../../helpers/formatEventList";

const customStyles = {
  content: {
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    transformValues: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const start_date = moment().minutes(0).seconds(0).add(1, "hours");
const end_date = start_date.clone().add(1, "hours");

const initialState = {
  id: 0,
  title: "",
  desc: "",
  start: start_date.toDate(),
  end: end_date.toDate(),
}

export const CalendarModal = ({ isOpen, setisOpen, evt, setEventList}) => {
  
  const [formValues, setFormValues] = useState(initialState);

  useEffect(() => {
    setFormValues({
      id: evt.id ? evt.id :  0,
      title: evt.title ? evt.title : "",
      desc: evt.desc ? evt.desc : "",
      start: evt.start ? moment(evt.start).toDate() : start_date.toDate(),
      end: evt.end ? moment(evt.end).toDate() : end_date.toDate(),
    })
  }, [evt]);

  const { id, title, desc, start, end } = formValues;

  const handleSubmit = async(e: any) => {
    e.preventDefault();

    const { isValid, formData } = isFormValid();
    
    if(!isValid){
      return
    }

    const data = await saveEvent(formData);
    if(data.ok){
      handleMessage(data);
      setEventList(formatEventList(data.event_list))
      setisOpen(false);
    }else{
      handleMessageError(data);
    }
  };

  const handleDelete = async () =>{
    Swal.fire({
      title: "Eliminar evento",
      text: "¿Seguro que desea eliminar este evento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEventMethod();
      }
    });
  }

  const deleteEventMethod = async () =>{
    const { id } = formValues;
    const data = await deleteEvent(id);
    if(data.ok){
      handleMessage(data);
      setEventList(formatEventList(data.event_list))
      setisOpen(false);
    }else{
      handleMessageError(data);
    }
  }

  const onCloseModal = () => {
    setisOpen(false);
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onChangeStartDatePicker = (evt: any) => {
    setFormValues({
      ...formValues,
      start: evt,
    });
  };

  const onChangeEndDatePicker = (evt: any) => {
    setFormValues({
      ...formValues,
      end: evt,
    });
  };

  const isFormValid = () => {
    let isValid = true;
    const {id, title, desc, start, end } = formValues;

    if (moment(start).isSameOrAfter(moment(end))) {
      console.log('object');
      Swal.fire(
        "Error",
        "La fecha final debe ser mayor a la fecha inicial",
        "warning"
      );
      isValid = false;
    }

    if (isValid && validator.isEmpty(title)) {
      Swal.fire("Error", "Debe agregar un titulo", "warning");
      isValid = false;
    }

    const formData = { id, title, desc, start_date: start, end_date: end };
    return { isValid, formData };
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={onCloseModal}
        style={customStyles}
        closeTimeoutMS={300}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1> Guardar evento </h1>
        <hr />
        <form className="container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Fecha y hora inicio</label>
            <DateTimePicker
              className="form-control"
              placeholder="Fecha inicio"
              onChange={onChangeStartDatePicker}
              value={start}
            />
          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            <DateTimePicker
              className="form-control"
              placeholder="Fecha fin"
              onChange={onChangeEndDatePicker}
              value={end}
              minDate={start}
            />
          </div>

          <hr />
          <div className="form-group">
            <label>Titulo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              onChange={handleInputChange}
              value={title}
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="form-group">
            <textarea
              onChange={handleInputChange}
              className="form-control"
              placeholder="Descripción"
              rows={5}
              value={desc}
              name="desc"
            ></textarea>

            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
          <span> </span>
          {
            id !== 0 
            && 
            <span  onClick={handleDelete} className="btn btn-outline-danger btn-block">
            <i className="far fa-save"></i>
            <span> Eliminar</span>
          </span>
          }
        </form>
      </Modal>
    </div>
  );
};
