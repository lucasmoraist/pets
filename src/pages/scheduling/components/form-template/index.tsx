import { Field, Form, Formik, FormikValues } from "formik";
import { TextField } from "../../../../components/text-field";
import { Button } from "../../../../components/button";
import { DateLabelFormik } from "../date-label-formik";
import { HourFieldFormik } from "../hour-field-formik";
import { schema } from "../../utils/schema";
import style from "./form-template.module.scss";

interface Props {
    initialValues: {
        owner: string;
        pet: string;
        phoneNumber: string;
        type: string;
        date: string;
        time: string;
    };
    handleSubmit: (values: FormikValues) => void;
}

export function FormTemplate({ initialValues, handleSubmit }: Props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className={style.form}>
          <TextField
            title="Nome do dono"
            name="owner"
            type="text"
            placeholder="Nome do dono"
            imgSrc="assets/svg/User--Streamline-Solar.svg"
          />

          <TextField
            title="Nome do pet"
            name="pet"
            type="text"
            placeholder="Cheddar"
            imgSrc="assets/svg/Pet-Paw--Streamline-Core.svg"
          />

          <TextField
            title="Telefone"
            name="phoneNumber"
            type="text"
            placeholder="(00) 0 0000-0000"
            imgSrc="assets/svg/Phone--Streamline-Solar.svg"
          />

          <TextField
            title="Descrição do serviço"
            name="type"
            type="textarea"
            placeholder="Banho e tosa"
          />

          <div className={style.dateAndTime}>
            <label>
              <span className="label-medium">Data</span>
              <Field name="date" as={DateLabelFormik} />
            </label>

            <label>
              <span className="label-medium">Hora</span>
              <Field name="time" as={HourFieldFormik} />
            </label>
          </div>

          <Button type="submit">Agendar</Button>
        </Form>
      )}
    </Formik>
  );
}
