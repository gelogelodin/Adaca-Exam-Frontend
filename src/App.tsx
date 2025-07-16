import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { taskStore } from "./stores/TaskStore";
import {
  Container,
  Header,
  Input,
  Button,
  List,
  Checkbox,
  Segment,
  ButtonGroup,
} from "semantic-ui-react";

const App = observer(() => {
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    taskStore.fetchTasks();
  }, []);

  const handleAdd = () => {
    if (newTask.trim()) {
      taskStore.addTask(newTask);
      setNewTask("");
    }
  };

  const filters = ["all", "active", "completed"] as const;

  return (
    <Container style={{ marginTop: 20 }}>
      <Header as="h2">Mini Task Tracker</Header>

      <Input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        action={{ icon: "plus", onClick: handleAdd }}
        placeholder="Add a task..."
        fluid
      />

      <ButtonGroup style={{ marginTop: "1em" }}>
        {filters.map((f) => (
          <Button
            key={f}
            active={taskStore.filter === f}
            onClick={() => taskStore.setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </ButtonGroup>

      <Segment loading={taskStore.loading} style={{ marginTop: "1em" }}>
        <List divided relaxed>
          {taskStore.filteredTasks.map((task) => (
            <List.Item key={task.id}>
              <Checkbox
                label={task.title}
                checked={task.completed}
                onChange={() => taskStore.toggleTask(task.id)}
              />
              <Button
                floated="right"
                size="mini"
                color="red"
                onClick={() => taskStore.deleteTask(task.id)}
              >
                Delete
              </Button>
            </List.Item>
          ))}
        </List>
      </Segment>
    </Container>
  );
});

export default App;
