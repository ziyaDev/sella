// this form for the sign up component
// Use Zod validations and call sign up api
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Form, Field } from "houseform";
import Link from "next/link";
import React from "react";
import { z } from "zod";

export const SignInForm = () => (
  <Form onSubmit={(values) => alert(JSON.stringify(values))}>
    {({ isValid, submit }) => (
      <div className="grid gap-3">
        {/* Email Field */}
        <Field<string>
          name="email"
          onSubmitValidate={z
            .string()
            .email("valid email")
            .min(3, "at lest 3 characters")}
        >
          {({ value, setValue, onBlur, errors }) => (
            <div className="grid gap-2">
              <Label
                className={`${
                  errors.length === 0
                    ? null
                    : "text-error transition-all delay-75"
                }`}
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
                    : "border-error transition-all delay-75 focus-visible:ring-error"
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
        {/* Password Field */}
        <Field<string>
          name="password"
          onSubmitValidate={z
            .string()
            .min(8, "8 characters long")
            .regex(/[A-Z]/, " one uppercase letter")
            .regex(/[a-z]/, "one lowercase letter")
            .regex(/[0-9]/, " one digit")}
        >
          {({ value, setValue, onBlur, errors }) => (
            <div className="grid gap-2">
              <Label
                className={`${
                  errors.length === 0
                    ? null
                    : "text-error transition-all delay-75"
                }`}
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
                    : "border-error transition-all delay-75 focus-visible:ring-error"
                }`}
                value={value}
                onBlur={onBlur}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="flex w-full justify-end">
                <Label htmlFor="password">
                  <Link
                    href="/auth/forgotpassword"
                    className=" text-color hover:text-color/80"
                  >
                    Forgot password?
                  </Link>
                </Label>
              </div>
            </div>
          )}
        </Field>
        <Button onClick={submit} type="submit">
          Sign in
        </Button>
      </div>
    )}
  </Form>
);
