/* eslint-disable react/prop-types */

import { useState } from "react";
import { LuMinusCircle } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";

export default function Questions({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto my-3 max-w-3xl">
      <div className=" rounded-md border-2 p-3 mx-2">
        <div className="flex justify-between  ">
          <h4 className="mr-2 text-sm font-semibold ">
            {question.title}
          </h4>
          <span className="ml-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <LuMinusCircle size={24}  />
            ) : (
              <LuPlusCircle size={24} className="text-primary" />
            )}
          </span>
        </div>

        <div>
          {isOpen && (
            <p className="mt-1 text-sm text-secondary">{question.answer}</p>
          )}
        </div>
      </div>
    </div>
  );
}
