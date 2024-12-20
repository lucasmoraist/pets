import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { TextField } from "../../components/text-field";
import { Button } from "../../components/button";
import style from "./login.module.scss";
import { login } from "../../api/controller/userController";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: FormikValues) => {
    try {
      const response = await login({
        email: values.email,
      });

      const password = response[0].password;

      if (values.password !== password) {
        setError("Email ou Senha inválidos");
        throw new Error("Email ou Senha inválidos");
      }

      navigate("/agenda");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className={style.form}>
            <h1 className={`title ${style.title}`}>Acesse sua conta</h1>

            <TextField
              name="email"
              title="E-mail"
              imgSrc="assets/svg/email.svg"
              placeholder="Digite seu e-mail"
              type="email"
            />
            <TextField
              name="password"
              title="Senha"
              imgSrc="assets/svg/key.svg"
              placeholder="Digite sua senha"
              type="password"
            />

            {error && (
              <div style={{ marginTop: "4px", width: "260px" }}>
                <span style={{ fontSize: "0.875rem", color: "#ff4d4f" }}>
                  {error}
                </span>
              </div>
            )}

            <div className={style.buttons}>
              {/* <Button button="secondary">Criar conta</Button> */}
              <Button button="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
