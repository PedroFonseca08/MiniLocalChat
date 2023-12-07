import React from "react";
import { isEmailValid } from "./../../helpers/EmailHelper";
import { isPasswordValid } from "./../../helpers/PasswordHelper";
import "./ValidationError.css";

type ValidationErrorProps = {
  errorMessage: string;
  hasChanged: boolean;
  type: "required" | "email" | "password";
  value: string;
  testId: string;
};

export default function ValidationError(props: ValidationErrorProps) {
  if (!props.hasChanged) {
    return null;
  }

  const error = (
    <div data-testid={props.testId} className="error">
      {props.errorMessage}
    </div>
  );

  // if (props.type === "required") {
  //   return props.value === "" ? error : null;
  // }

  if (props.type === "password") {
    return !isPasswordValid(props.value) ? error : null;
  }

  return !isEmailValid(props.value) ? error : null;
}
