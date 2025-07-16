import { observer } from "mobx-react-lite";
import { taskStore } from "../stores/TaskStore";
import { List, Checkbox, Button, Icon } from "semantic-ui-react";

export const TaskList = observer(() => (
  <List divided relaxed>
    {taskStore.filteredTasks.map(task => (
      <List.Item key={task.id} style={{"position":"relative", "padding":"10px"}}>
        <Checkbox
          label={task.title}
          checked={task.completed}
          onChange={() => taskStore.toggleTask(task.id)}
        />
        <Button
            icon
            color="red"
            size="mini"
            onClick={() => taskStore.deleteTask(task.id)}
            style={{"position":"absolute","right":"0px", "top":"4px"}}
          >
            <Icon name="trash" />
          </Button>
      </List.Item>
    ))}
  </List>
));
