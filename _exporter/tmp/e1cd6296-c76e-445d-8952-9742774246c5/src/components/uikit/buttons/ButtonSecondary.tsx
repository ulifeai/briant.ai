import { Button } from "@/components/ui/base/button";
import React from "react";

type Props = {
  children: string;
  className: string;
};

export default function ButtonSecondary({ className, children }: Props) {
  return (
    <Button className={className} variant={"secondary"} size={"secondary"}>
      {children}
    </Button>
  );
}
