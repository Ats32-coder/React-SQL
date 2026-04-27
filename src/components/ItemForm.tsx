import { useState } from "react";

type Props = {
  onAdd: (name: string) => void;
};

export default function ItemForm({ onAdd }: Props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (!value.trim()) return;
          onAdd(value);
          setValue("");
        }}
      >
        Lisa andmeid
      </button>
    </div>
  );
}