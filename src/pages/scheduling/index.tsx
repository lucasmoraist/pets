import { FormikValues } from "formik";
import style from "./scheduling.module.scss";
import { FormTemplate } from "./components/form-template";

export function Scheduling() {
  const initialValues = {
    owner: "",
    pet: "",
    phoneNumber: "",
    type: "",
    date: "",
    time: "",
  };

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
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
