import { Button } from "semantic-ui-react";
import { taskStore } from "../stores/TaskStore";

export const TaskFilter = () => (
  <Button.Group>
    <Button onClick={() => taskStore.setFilter("all")}>All</Button>
    <Button onClick={() => taskStore.setFilter("completed")}>Completed</Button>
    <Button onClick={() => taskStore.setFilter("incomplete")}>Incomplete</Button>
  </Button.Group>
);
