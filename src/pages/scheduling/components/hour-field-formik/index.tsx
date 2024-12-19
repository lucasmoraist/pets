import style from "./hour-field.module.scss";
import { useState } from "react";
import { useField } from "formik";

interface HourFieldFormikProps {
  label: string;
  name: string;
}

export function HourFieldFormik({ label, ...props }: HourFieldFormikProps) {
  const [field, meta, helpers] = useField(props);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const hours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  return (
    <div className={style.hourContainer}>
      <label>{label}</label>
      <div
        className={modalOpen ? style.hourLabelOpen : style.hourLabel}
        onClick={toggleModal}
      >
        <div>
          <img
            src="assets/svg/Clock-Circle--Streamline-Solar.svg"
            alt="Clock"
          />
          <span>{field.value || "00:00"}</span>
        </div>
        <img
          src="assets/svg/Icon.svg"
          alt="Toggle"
          className={modalOpen ? style.active : style.inactive}
        />
      </div>
      {modalOpen && (
        <ul>
          {hours.map((hour) => (
            <li
              key={hour}
              onClick={() => {
                helpers.setValue(hour); // Atualiza o valor no Formik
                toggleModal();
              }}
            >
              {hour}
            </li>
          ))}
        </ul>
      )}
      {meta.touched && meta.error ? (
        <div style={{ marginTop: "4px" }}>
          <span style={{ fontSize: "12px", color: "#ff4d4f" }}>{meta.error}</span>
        </div>
      ) : null}
    </div>
  );
}
