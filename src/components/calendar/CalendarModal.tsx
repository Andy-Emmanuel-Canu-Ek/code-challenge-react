import React, { useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";

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

export const CalendarModal = ({isOpen, setisOpen}) => {
  const [startDate, setStartDate] = useState(start_date.toDate());
  const [endDate, setEndDate] = useState(end_date.toDate());

  const [formValues, setFormValues] = useState({
    title: "nuevo evento",
    desc: "",
    start: start_date.toDate(),
    end: end_date.toDate(),
  });

  const { title, desc, start, end } = formValues;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mStart = moment(start);
    const mEnd = moment(end);

    if (mStart.isSameOrAfter(mEnd)) {
      return Swal.fire(
        "Error",
        "La fecha final debe ser mayor a la fecha inicial",
        "warning"
      );
    }

    if (title.trim().length === 0) {
      return Swal.fire("Error", "Debe agregar un titulo", "warning");
    }

    setisOpen(false);
  };

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
    setStartDate(evt);
    setFormValues({
      ...formValues,
      start: evt,
    });
  };

  const onChangeEndDatePicker = (evt: any) => {
    setEndDate(evt);
    setFormValues({
      ...formValues,
      end: evt,
    });
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
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Fecha y hora inicio</label>
            <DateTimePicker
              className="form-control"
              placeholder="Fecha inicio"
              onChange={onChangeStartDatePicker}
              value={startDate}
            />
          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            <DateTimePicker
              className="form-control"
              placeholder="Fecha fin"
              onChange={onChangeEndDatePicker}
              value={endDate}
              minDate={startDate}
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
              name="notes"
            ></textarea>

            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </div>
  );
};
