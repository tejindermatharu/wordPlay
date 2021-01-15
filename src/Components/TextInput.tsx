import * as React from "react";

interface ITextInputProps {
  onChange: (e: any) => void;
  text: string;
  [x: string]: any;
}

//props as a Rest param...is everything passed to it, except for the props to the
//l.h.s which is using destructuring to assign properties to named props, and rest param for everyhting else
export default function TextInput({
  onChange,
  text,
  ...props
}: ITextInputProps) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChange}
        {...props} //only valid dom attributes will work here
      />
      {text}
    </div>
  );
}
