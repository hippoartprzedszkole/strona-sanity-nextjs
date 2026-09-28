import {
  ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";

interface ScrollbarContextType {
  isVisible: boolean;
  showScrollbar: () => void;
  hideScrollbar: () => void;
}

export const ScrollbarContext = createContext<ScrollbarContextType>({
  isVisible: false,
  showScrollbar: () => {},
  hideScrollbar: () => {},
});

export const useScrollbarContext = () => useContext(ScrollbarContext);

export const ScrollbarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const showScrollbar = () => {
    setIsVisible(true);
  };

  const hideScrollbar = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [isVisible]);

  return (
    <ScrollbarContext.Provider
      value={{ isVisible, showScrollbar, hideScrollbar }}
    >
      {children}
    </ScrollbarContext.Provider>
  );
};
