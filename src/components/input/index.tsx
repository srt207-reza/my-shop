"use client";

import { Dispatch, SetStateAction } from "react";

interface Props {
  name: string;
  type?: string;
  value: string;
  label: string;
  change: Dispatch<SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ name, value, type, label, change }) => {
  return (
    <div className="user-box">
      <input
        required
        spellCheck={false}
        maxLength={10}
        name={name}
        onChange={(e) => change(e.target.value)}
        value={value}
        type={type || "text"}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
