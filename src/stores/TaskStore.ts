import { makeAutoObservable, runInAction } from "mobx";
import { getTasks, addTask, updateTask, deleteTask } from "../api/tasks";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

class TaskStore {
  tasks: Task[] = [];
  filter: "all" | "completed" | "incomplete" = "all";

  constructor() {
    makeAutoObservable(this);
    this.fetchTasks();
  }

  get filteredTasks() {
    if (this.filter === "all") return this.tasks;
    if (this.filter === "completed") return this.tasks.filter(t => t.completed);
    return this.tasks.filter(t => !t.completed);
  }

  setFilter(filter: "all" | "completed" | "incomplete") {
    this.filter = filter;
  }

  async fetchTasks() {
    const data = await getTasks();
    runInAction(() => {
      this.tasks = data;
    });
  }

  async addTask(title: string) {
    const newTask = await addTask(title);
    runInAction(() => {
      this.tasks.push(newTask);
    });
  }

  async toggleTask(id: string) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return;
    const updated = { ...task, completed: !task.completed };


    runInAction(() => {
      task.completed = !task.completed;
    });

    try {
      await updateTask(id, updated);
    } catch (err) {
      runInAction(() => {
        task.completed = !task.completed;
      });
    }
  }
  async deleteTask(id: string) {
    const previousTasks = [...this.tasks];
    runInAction(() => {
      this.tasks = this.tasks.filter(t => t.id !== id);
    });

    try {
      await deleteTask(id);
    } catch (err) {
      runInAction(() => {
        this.tasks = previousTasks;
      });
    }
  }
}

export const taskStore = new TaskStore();
