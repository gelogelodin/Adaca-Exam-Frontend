import { Container, Header } from "semantic-ui-react";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";
import { TaskFilter } from "./components/TaskFilter";

function App() {
  return (
    <Container style={{ marginTop: "2em" }}>
      <Header as="h2">Mini Task Tracker</Header>
      <AddTaskForm />
      <Container>
        <TaskFilter />
        <TaskList />
      </Container>
    </Container>
  );
}

export default App;
