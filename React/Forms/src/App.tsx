import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

type FormData = {
  name: string;
  date: string;
  subject: string;
  description: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required!"),
  date: yup.string().required("Date is required!"),
  subject: yup.string().required("Select one subject!"),
  description: yup
    .string()
    .required("Description is required!")
    .min(10, "The description must have ten digits. "),
});

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { name: "", date: "", subject: "", description: "" },
    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />

        {errors.name?.message && (
          <span className="error">{errors.name.message}</span>
        )}

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input type="date" placeholder="Nome do evento" {...field} />
          )}
        />

        {errors.date?.message && (
          <span className="error">{errors.date.message}</span>
        )}

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="technology">React</option>
              <option value="entertainment">Node.js</option>
              <option value="business">Javascript</option>
              <option value="business">Typescript</option>
            </select>
          )}
        />

        {errors.subject?.message && (
          <span className="error">{errors.subject.message}</span>
        )}

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />

        {errors.description?.message && (
          <span className="error">{errors.description.message}</span>
        )}

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
