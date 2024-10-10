import { Button } from "@/components/ui/base/button";
import React from "react";

type Props = {
  children: string;
  className?: string;
};

export default function ButtonLink2({ className, children }: Props) {
  return (
    <Button className={className} variant={"link2"} size={"link2"}>
      <a href="#">{children}</a>
    </Button>
  );
}
