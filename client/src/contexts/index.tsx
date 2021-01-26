import { createContext } from "react";

export const UnitsContext = createContext<{
    units?: any;
    setUnits?: React.Dispatch<any>;
}>({});
