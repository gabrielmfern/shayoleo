import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function Email({ name, message }) {
  return (
    <Html>
      <h1>{name}</h1>
      <p>{message}</p>
    </Html>
  );
}
