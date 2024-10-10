/**
 * A form with a link
 * @param {string} btnNameInput It allows naming the form button
 * @param {string} inputNamePlaceholder It allows naming the input placeholder
 * @param {string} className Allows adding CSS classes
 * @param {string} btnColor Allows changing the link color
 */

import React from "react";
import ButtonSubmit from "../buttons/ButtonSubmit";
import ButtonLink2 from "../buttons/ButtonLink2";

type Props = {
  btnNameInput: string;
  inputNamePlaceholder: string;
  className: string;
  btnColor: string;
};

export default function Form1({
  className,
  btnNameInput,
  inputNamePlaceholder,
  btnColor,
}: Props) {
  return (
    <div className={`w-full flex items-center ${className}`}>
      <div className="lg:max-w-[30rem]">
        <form
          action=""
          className="flex flex-col gap-y-3 mb-4 lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_max-content] lg:gap-x-4"
        >
          <input
            type="text"
            placeholder={inputNamePlaceholder}
            className="border border-black h-auto min-h-11 mb-0 px-2 py-3 text-base leading-relaxed bg-white text-black"
          />
          <ButtonSubmit className="">{btnNameInput}</ButtonSubmit>
        </form>
        <div className={` text-xs`}>
          By clicking Sign Up you're confirming that you agree with our{" "}
          <ButtonLink2 className={btnColor}>Terms and Conditions</ButtonLink2>
        </div>
      </div>
    </div>
  );
}
