"use client";
import { ReactNode } from "react";
import { Toast } from "@/src/utils/styledLibs";
import Header from "../Header";
import Footer from "../Footer";
import { ICommonComponents } from "@/src/types/common";
import { CommonComponentsContextProvider } from "@/src/context/CommonComponentsContext";
import { ScrollbarContextProvider } from "@/src/context/ScrollbarContext";

export const Layout = ({
  children,
  commonComponents,
}: {
  children: ReactNode;
  commonComponents: ICommonComponents;
}) => {
  return (
    <CommonComponentsContextProvider value={commonComponents}>
      <LayoutController>{children}</LayoutController>
    </CommonComponentsContextProvider>
  );
};

const LayoutController = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollbarContextProvider>
      <Toast />
      <div className="flex flex-col items-center justify-center">
        <Header />
        {children}
        <Footer />
      </div>
    </ScrollbarContextProvider>
  );
};

export default Layout;
