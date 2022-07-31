import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormInputElement } from "@skedulo/sked-ui";
import * as yup from "yup";
import MessageError from "../InlineError/MessageError";

interface Props {
  className?: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

type FormData = {
  username: string;
  password: string;
};

// simple use case
const SimpleForm: React.FC<Props> = () => {
  const { register, formState, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
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
          {/* Normal input how to use */}
          <div className="mb-4">
            <p className="mb-2">Username:</p>
            <input
              className="sked-input-textbox sked-form-element__outline"
              type="text"
              {...register("username")}
            />
            {formState.errors.username?.message && (
              <MessageError message={formState.errors.username.message} />
            )}
          </div>

          {/* Use with skedulo ui */}
          <div>
            <p className="mb-2">Password:</p>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <FormInputElement type="password" value={field.value} onChange={field.onChange} />
              )}
            />

            {formState.errors.password?.message && (
              <MessageError message={formState.errors.password.message} />
            )}
          </div>

          <Button
            className="mt-2 w-full justify-center"
            buttonType="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
