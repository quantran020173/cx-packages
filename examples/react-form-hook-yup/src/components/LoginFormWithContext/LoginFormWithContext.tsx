import React from "react";
import { Controller, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormInputElement } from "@skedulo/sked-ui";
import * as yup from "yup";
import MessageError from "../InlineError/MessageError";
import InlineError from "../InlineError";
import TextInput from "../TextInput";

interface Props {
  className?: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  // password min length is 8 max 16
  password: yup.string().min(8, "Password is too short").max(16, "Password is too long"),
  // phone is string and min length of 10, is required
  phone: yup.string().min(10).required("Phone is required"),
});

type FormData = {
  username: string;
  password: string;
  phone: string;
};

// simple use case
const FormContext: React.FC<Props> = () => {
  const formMethods = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
      phone: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormData) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="h-screen w-screen bg-1 flex">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-xs bg-white p-4 rounded-medium">
        <p className="text-lg mb-2 text-center">With context</p>

          <FormProvider {...formMethods}>
            <TextInput label="Username" name="username" className="mb-3" />
            <TextInput label="Password" name="password" type="password" className="mb-3" />
            <TextInput label="Phone" name="phone" />

            <Button
              className="mt-2 w-full justify-center"
              buttonType="primary"
              onClick={formMethods.handleSubmit(onSubmit)}
            >
              Login
            </Button>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default FormContext;
