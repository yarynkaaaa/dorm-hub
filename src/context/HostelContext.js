import { createContext, useContext } from "react";

export const HostelContext = createContext(null);

export function useHostel() {
  const context = useContext(HostelContext);
  if (context === null) {
    throw new Error("useHostel потрібно викликати всередині HostelProvider");
  }
  return context;
}
