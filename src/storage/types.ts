export interface IBoard {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  subtasks: ISubtask[];
  status: string;
}

export interface ISubtask {
  id: string;
  description: string;
  status: boolean;
}
