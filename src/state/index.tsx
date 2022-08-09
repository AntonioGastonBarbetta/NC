import React, { useState } from "react";
import { sendLoginCredentials } from "../api/login";
import { fetchMembers } from "../api/members";
import { Data } from "../interfaces/data";

interface StateContextType {
  token: string;
  signin: () => void;
  tableData: Data[];
  setTableData: React.Dispatch<React.SetStateAction<Data[]>>;
}

const StateContext = React.createContext<StateContextType>(null!);

export function useAppState() {
  return React.useContext(StateContext);
}

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState("");
  const [tableData, setTableData] = useState<Data[]>([]);

  const signin = async () => {
    const userToken = await sendLoginCredentials();
    setToken(userToken);
    const data = await fetchMembers(userToken);
    setTableData(data);
  };

  const value = { token, signin, tableData, setTableData };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
