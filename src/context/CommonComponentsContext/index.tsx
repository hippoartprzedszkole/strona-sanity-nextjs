import { ICommonComponents } from "@/src/types/common";
import { ReactNode, useContext, createContext } from "react";

type CommonComponentsContextType = ICommonComponents;

//todo: types

export const CommonComponentsContext =
  // @ts-expect-error - initial has to be undefined
  createContext<CommonComponentsContextType>();

export const useCommonComponentsContext = () =>
  useContext(CommonComponentsContext);

export const CommonComponentsContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: CommonComponentsContextType;
}) => {
  return (
    <CommonComponentsContext.Provider value={value}>
      {children}
    </CommonComponentsContext.Provider>
  );
};
