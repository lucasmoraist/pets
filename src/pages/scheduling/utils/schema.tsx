import * as Yup from "yup";

export const schema = Yup.object().shape({
  owner: Yup.string().required("Campo obrigatório"),
  pet: Yup.string().required("Campo obrigatório"),
  phoneNumber: Yup.string().required("Campo obrigatório"),
  type: Yup.string().required("Campo obrigatório"),
  date: Yup.string()
    .required("Campo obrigatório")
    .test(
      "is-valid-date",
      "A data não pode ser anterior ao dia de hoje",
      (value) => {
        const today = new Date();
        const selectedDate = new Date(value);
        return selectedDate >= today;
      }
    )
    .test("is-weekend", "A data não pode ser em um fim de semana", (value) => {
      const selectedDate = new Date(value);
      const day = selectedDate.getDay();
      return day !== 0 && day !== 6;
    }),
  time: Yup.string().required("Campo obrigatório"),
});
