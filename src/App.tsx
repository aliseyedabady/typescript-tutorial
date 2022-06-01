import React, { useState } from "react";
import "./App.css";
import { castomRandom } from "./common/functions/random";
import InputFiled from "./components/InputFiled";
import { Todo } from "./models/todo";

const App: React.FC = () => {
  const [form, setForm] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);
  const handler = (): void => {
    setList([...list, { title: form, id: castomRandom(), isDone: false }]);
  };
  return (
    <div className="App">
      <InputFiled form={form} setForm={setForm} handler={handler} />
    </div>
  );
};

export default App;
