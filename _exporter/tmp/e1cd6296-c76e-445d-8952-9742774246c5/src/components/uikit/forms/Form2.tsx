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

export default function Form2({
  className,
  btnNameInput,
  inputNamePlaceholder,
  btnColor,
}: Props) {
  return (
    <div className={`flex  ${className}`}>
      <div className="">
        <form
          action=""
          className="flex flex-col gap-2"
        >
          <input
            type="text"
            placeholder={inputNamePlaceholder}
            className="border border-black h-auto min-h-11 mb-0 py-2 px-3 text-lg leading-relaxed bg-white text-[#333] font-medium"
          />
          <ButtonSubmit className="">{btnNameInput}</ButtonSubmit>
        </form>
        
      </div>
    </div>
  );
}
