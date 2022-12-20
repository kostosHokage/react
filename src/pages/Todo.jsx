import React from "react";
import { Checkbox } from "@mantine/core";

export default function Todo() {
  const list = [
    { id: 0, title: "Съесть деда" },
    { id: 1, title: "Съесть окрошку" },
  ];
  return (
    <div>
      {list.map((items) => (
        <div key={items.id}>
          <Checkbox label={items.title} mb="10px" />
        </div>
      ))}
    </div>
  );
}
