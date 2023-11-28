import React, { ReactNode } from "react";
import { FormProvider as Form, UseFormReturn } from "react-hook-form";

interface FormProviderProps {
  children: ReactNode;
  onSubmit: () => void;
  methods: UseFormReturn<any>;
}

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: FormProviderProps): JSX.Element {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
