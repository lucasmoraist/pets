import { useState } from "react";
import style from "./date-label.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface Props {
  date: Value;
  setDate: (value: Date) => void;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function DateLabel({ date, setDate }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const formatDate = (value: Value) => {
    if (value instanceof Date) {
      return value.toLocaleDateString();
    } else if (
      Array.isArray(value) &&
      value[0] instanceof Date &&
      value[1] instanceof Date
    ) {
      return `${value[0].toLocaleDateString()} - ${value[1].toLocaleDateString()}`;
    }
    return "Nenhuma data selecionada";
  };

  const minDate = new Date();

  return (
    <div className={style.dateContainer}>
      <div onClick={toggleModal} className={style.dateLabel}>
        <img
          src="assets/svg/Calendar-Minimalistic--Streamline-Solar.svg"
          alt=""
        />
        <p className={style.dateText}>{formatDate(date)}</p>
        <img
          src="assets/svg/Icon.svg"
          alt=""
          className={modalOpen ? style.active : style.inactive}
        />
      </div>

      {modalOpen && (
        <div className={style.modal}>
          <Calendar
            onChange={(value) => {
              setDate(value);
              toggleModal();
            }}
            value={date}
            minDate={minDate}
          />
        </div>
      )}
    </div>
  );
}
