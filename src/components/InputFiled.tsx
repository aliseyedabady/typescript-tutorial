import React from "react";
interface Props {
  form: string;
  setForm: React.Dispatch<React.SetStateAction<string>>;
  handler: () => void;
}
const InputFiled: React.FC<Props> = ({ form, setForm, handler }) => {
  return (
    <div>
      <input
        type="text"
        value={form}
        onChange={({ target: { value } }) => {
          setForm(value);
        }}
      />
      <button onClick={handler}> add</button>
    </div>
  );
};

export default InputFiled;
