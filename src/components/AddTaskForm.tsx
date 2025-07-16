import { useState } from "react";
import { Input } from "semantic-ui-react";
import { taskStore } from "../stores/TaskStore";

export const AddTaskForm = () => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    taskStore.addTask(title);
    setTitle("");
  };

  return (
    <Input
      action={{
        icon: "plus",
        onClick: handleAdd
      }}
      placeholder="New task..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      style={{"margin-bottom":"20px"}}
    />
  );
};
