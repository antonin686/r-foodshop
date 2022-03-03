import React from "react";
import { useForm } from "react-hook-form";

function Form({ defaultValues, children, onSubmit, submitBtn }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>(defaultValues);
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}

      {submitBtn && (
        <button className="theme-bg text-white rounded-lg w-full p-2 ">
          {submitBtn}
        </button>
      )}
    </form>
  );
}

function Input({ register, name, ...rest }: any) {
  return <input {...register(name)} {...rest} />;
}

export { Form, Input };
