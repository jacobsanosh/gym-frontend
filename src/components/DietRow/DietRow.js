import React, { useState } from "react";
import { complete_diet } from "../../api";

function DietRow({ item }) {
  const [completed, setCompleted] = useState(item.completed);
  const diet_complete = async (id) => {
    setCompleted(!completed);
    try {
      await complete_diet(id);
    } catch (error) {
      console.log(error);
    }
  };
  if (completed) {
    return "";
  } else {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.quantity}</td>

        <td>{item.protein}</td>
        <td>{item.no_of_times}</td>
        <td>{item.time}</td>
        <td>
          <input
            type="checkbox"
            id="work"
            name="done"
            checked={completed}
            onChange={() => {
              diet_complete(item.id);
            }}
          />
        </td>
      </tr>
    );
  }
}

export default DietRow;
