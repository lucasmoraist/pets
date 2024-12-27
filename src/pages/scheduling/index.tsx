import { FormikValues } from "formik";
import style from "./scheduling.module.scss";
import { FormTemplate } from "./components/form-template";
import { useNavigate } from "react-router-dom";
import { createSchedule } from "../../api/controller/scheduleController";

export function Scheduling() {

  const navigate = useNavigate();

  const initialValues = {
    owner: "",
    pet: "",
    phoneNumber: "",
    type: "",
    date: "",
    time: "",
  };

  const handleSubmit = async (values: FormikValues) => {
    const response = await createSchedule({
      owner: values.owner,
      pet: values.pet,
      phoneNumber: values.phoneNumber,
      type: values.type,
      date: values.date,
      hour: values.time,
    });

    if(response) {
      navigate("/agenda");
    }
  };

  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.header}>
          <h1 className="title">Agende um atendimento</h1>
          <p className="paragraph-medium">
            Preencha os dados do cliente para realizar o agendamento:
          </p>
        </div>

        <FormTemplate 
          initialValues={initialValues} 
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
