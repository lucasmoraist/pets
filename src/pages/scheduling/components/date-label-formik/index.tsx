import { useState, useEffect } from "react";
import { useField } from "formik";
import style from "./date-label-formik.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface DateLabelFormikProps {
  name: string;
  label: string;
}

export function DateLabelFormik({ label, name }: DateLabelFormikProps) {
  const [field, meta, helpers] = useField({ name });
  const [modalOpen, setModalOpen] = useState(false);

  const today = new Date();

  useEffect(() => {
    if (!field.value || isNaN(new Date(field.value).getTime())) {
      helpers.setValue(today);
    }
  }, [field.value, helpers, today]);

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

  return (
    <div className={style.dateContainer}>
      <label>{label}</label>
      <div onClick={toggleModal} className={style.dateLabel}>
        <img
          src="assets/svg/Calendar-Minimalistic--Streamline-Solar.svg"
          alt="Calendar"
        />
        <p className={style.dateText}>{formatDate(field.value)}</p>
        <img
          src="assets/svg/Icon.svg"
          alt="Toggle"
          className={modalOpen ? style.active : style.inactive}
        />
      </div>
      {modalOpen && (
        <div className={style.modal}>
          <Calendar
            onChange={(date) => {
              helpers.setValue(date);
              toggleModal();
            }}
            value={field.value || today}
            minDate={today}
          />
        </div>
      )}
      {meta.touched && meta.error ? (
        <div style={{ marginTop: "4px" }}>
          <span style={{ fontSize: "12px", color: "#ff4d4f" }}>
            {meta.error}
          </span>
        </div>
      ) : null}
    </div>
  );
}
