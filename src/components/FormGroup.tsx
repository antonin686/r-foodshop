import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Form({ defaultValues, children, onSubmit, submitBtn }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
  });
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
                    errors,
                  },
                })
              : child;
          })
        : children}

      {submitBtn && (
        <button type="submit" className="bg-theme text-white rounded-lg w-full p-2 ">
          {submitBtn}
        </button>
      )}
    </form>
  );
}

function Input({ register, name, rq = true, rule, cStyle, errors, label, ...rest }: any) {
  rule = { ...rule, required: rq };

  if (!cStyle) {
    cStyle = "c-input";
  }

  return (
    <div className="relative">
      <label className="capitalize">
        {label ? label : name} {!rq && "(Optional)"}
      </label>
      <input {...register(name, rule)} className={cStyle} {...rest} />
      <p className="text-red-600">{showError(name, errors)}</p>
    </div>
  );
}

function InputPass({ register, name, rq = true, rule, cStyle, errors, ...rest }: any) {
  const [show, setShow] = useState(false);
  rule = { ...rule, required: rq };
  if (!cStyle) cStyle = "c-input";

  return (
    <div className="relative">
      <label className="capitalize">
        {name} {!rq && "(Optional)"}
      </label>
      <input
        type={show ? "text" : "password"}
        {...register(name, rule)}
        className={cStyle}
        {...rest}
      />
      <button
        type="button"
        className="absolute right-4 text-xl top-9"
        onClick={() => setShow(!show)}
      >
        {!show ? <FaEye /> : <FaEyeSlash />}
      </button>
      <p className="text-red-600">{showError(name, errors)}</p>
    </div>
  );
}

function Select({
  register,
  name,
  rq = true,
  rule,
  cStyle,
  errors,
  options,
  ...rest
}: any) {
  rule = { ...rule, required: rq };

  if (!cStyle) {
    cStyle = "c-input";
  }

  return (
    <div className="relative">
      <label className="capitalize">
        {name} {!rq && "(Optional)"}
      </label>
      <select {...register(name, rule)} className="c-input" {...rest}>
        <option value="">Please select a {name}</option>
        {options.map((option: any, index: number) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="text-red-600">{showError(name, errors)}</p>
    </div>
  );
}

function showError(name: string, errors: any) {
  if (errors[name]?.message) {
    return errors[name].message;
  } else {
    if (errors[name]?.type == "required") {
      return (
        <>
          *<span className="capitalize">{name}</span> is required
        </>
      );
    }
  }
}

export { Form, Input, InputPass, Select };
