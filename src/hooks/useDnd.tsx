import { createContext, useState } from "react";

export const DndContext = createContext({
  isDndEnabled: false,
  toggleDnd: () => {},
});

export function DndContextProvider({ children }: any) {
  const [isDndEnabled, setIsDndEnabled] = useState(false);
  const toggleDnd = () => setIsDndEnabled((prev) => !prev);

  return (
    <DndContext.Provider value={{ isDndEnabled, toggleDnd }}>
      {children}
    </DndContext.Provider>
  );
}
