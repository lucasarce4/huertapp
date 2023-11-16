import React from "react";

type TaskContextType = {
  reload: boolean;
  reloadNew: () => void;
  idOrchard: string;
  IdOrchardSet: (id: string) => void;
};

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);
export default TaskContext;
