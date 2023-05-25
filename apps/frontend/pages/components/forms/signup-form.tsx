// this form for the sign up component
// Use Zod validations and call sign up api
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Form, Field } from "houseform";
import React from "react";
import { z } from "zod";

export const SignUpForm = () => (
  <Form onSubmit={(values) => alert(JSON.stringify(values))}>
    {({ isValid, submit }) => (
      <div className="grid gap-3">
        {/* Email Field */}
        <Field<string>
          name="email"
          onBlurValidate={z
            .string()
            .email("valid email")
            .min(3, "at lest 3 characters")}
        >
          {({ value, setValue, onBlur, errors }) => (
            <div className="grid gap-2">
              <Label
                className={`${errors.length === 0 ? null : "text-error"}`}
                htmlFor="email"
              >
                Email :
              </Label>
              <Input
                type="email"
                id="email"
                className={`${
                  errors.length === 0
                    ? null
                    : "border-error focus-visible:ring-error"
                }`}
                value={value}
                onBlur={onBlur}
                onChange={(e) => setValue(e.target.value)}
              />
              {/* {errors.length === 0 ? null : (
                <p className="text-sm text-error">
                  use{" "}
                  {errors.map((error, index) => (
                    <React.Fragment key={index}>
                      {error}
                      {index !== errors.length - 1 && ", "}
                    </React.Fragment>
                  ))}{" "}
                </p>
              )} */}
            </div>
          )}
        </Field>
        {/* Name Field
        <Field
          name="text"
          onBlurValidate={z
            .string()
            .min(4, "Name must be at lest 4 characters")}
        >
          {({ value, setValue, onBlur, errors }) => (
            <div className="grid gap-2">
              <Label className="grid gap-2" htmlFor="name">
                Name :
              </Label>
              <Input
                type="text"
                id="name"
                value={value}
                onBlur={onBlur}
                onChange={(e) => setValue(e.target.value)}
              />
              {errors.map((error) => (
                <p className="text-sm text-error" key={error}>
                  {error}
                </p>
              ))}
            </div>
          )}
        </Field> */}

        {/* Password Field */}
        <Field<string>
          name="password"
          onBlurValidate={z
            .string()
            .min(8, "8 characters long")
            .regex(/[A-Z]/, " one uppercase letter")
            .regex(/[a-z]/, "one lowercase letter")
            .regex(/[0-9]/, " one digit")}
        >
          {({ value, setValue, onBlur, errors }) => (
            <div className="grid gap-2">
              <Label
                className={`${errors.length === 0 ? null : "text-error"}`}
                htmlFor="password"
              >
                Password :
              </Label>
              <Input
                type="password"
                id="password"
                className={`${
                  errors.length === 0
                    ? null
                    : "border-error focus-visible:ring-error"
                }`}
                value={value}
                onBlur={onBlur}
                onChange={(e) => setValue(e.target.value)}
              />
              {/* {errors.length === 0 ? null : (
                <p className="text-sm text-error">
                  Password should contain at least{" "}
                  {errors.map((error, index) => (
                    <React.Fragment key={index}>
                      {error}
                      {index !== errors.length - 1 && ", "}
                    </React.Fragment>
                  ))}{" "}
                  .
                </p>
              )} */}
            </div>
          )}
        </Field>
        {/* Retype Password Field */}
        <Field<string>
          name="confirmpassword"
          listenTo={["password"]}
          onBlurValidate={(val, form) => {
            if (val === form.getFieldValue("password")!.value) {
              return Promise.resolve(true);
            } else {
              return Promise.reject("Passwords must match");
            }
          }}
        >
          {({ value, setValue, onBlur, errors }) => (
            <div className="grid gap-2">
              <Label
                className={`${errors.length === 0 ? null : "text-error"}`}
                htmlFor="password"
              >
                Confirm password :
              </Label>
              <Input
                type="password"
                id="password"
                className={`${
                  errors.length === 0
                    ? null
                    : "border-error focus-visible:ring-error"
                }`}
                value={value}
                onBlur={onBlur}
                onChange={(e) => setValue(e.target.value)}
              />
              {/* {errors.length === 0 ? null : (
                <p className="text-sm text-error">{errors}.</p>
              )} */}
            </div>
          )}
        </Field>
        <Button onClick={submit} type="submit">
          Sign up
        </Button>
      </div>
    )}
  </Form>
);
