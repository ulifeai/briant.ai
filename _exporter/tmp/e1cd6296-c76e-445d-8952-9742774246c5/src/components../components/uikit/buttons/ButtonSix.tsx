import { Button } from "@/components/ui/base/button";
import React from "react";

type Props = {
  children: string;
  className: string;
};

export default function ButtonSix({ className, children }: Props) {
  return (
    <Button className={className} variant={"six"} size={"six"}>
      {children}
    </Button>
  );
}
