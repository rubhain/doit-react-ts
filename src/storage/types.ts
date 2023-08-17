export interface IBoard {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface ITask {
  title: string;
  description: string;
  subtasks: ISubtask[];
  status: string;
}

export interface ISubtask {
  description: string;
  status: boolean;
}
