import React from "react";
import { FormInputElement } from "@skedulo/sked-ui";
import { Controller, useFormContext } from "react-hook-form";
import InlineError from "../InlineError";

interface Props {
  className?: string;
  label?: string;
  name: string;
  type?: string;
}

const TextInput: React.FC<Props> = ({
  className,
  label,
  name,
  type = "text",
}) => {
  const formMethods = useFormContext();

  return (
    <div className={className}>
      {label && <label className="mb-2">{label}</label>}
      <Controller
        name={name}
        control={formMethods.control}
        render={({ field }) => (
          <FormInputElement
            onChange={field.onChange}
            value={field.value}
            type={type}
          />
        )}
      />
      <InlineError name={name} />
    </div>
  );
};

export default TextInput;
