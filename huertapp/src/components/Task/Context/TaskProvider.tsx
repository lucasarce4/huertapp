import React, { PropsWithChildren, ReactElement, useState } from "react";
import TaskContext from "./TaskContext";

function TaskProvider({ children }: PropsWithChildren): ReactElement {
  const [reload, setReload] = useState<boolean>(false);
  const [idOrchard, setIdOrchard] = useState<string>("");

  const reloadNew = () => {
    setReload(!reload);
  };

  const IdOrchardSet = (id: string) => {
    setIdOrchard(id);
  };

  return (
    <TaskContext.Provider
      value={{
        reload,
        reloadNew,
        idOrchard,
        IdOrchardSet,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
