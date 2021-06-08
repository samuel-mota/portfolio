import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface DarkModeContextData {
  darkMode: boolean;
  changeDarkModeState: () => void;
}

interface DarkModeContextProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextData);

export default function DarkModeContextProvider({
  children,
}: DarkModeContextProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkModeState() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  useEffect(() => {
    darkMode
      ? document.querySelector("body").classList.add("dark")
      : document.querySelector("body").classList.remove("dark");
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, changeDarkModeState }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// abstraction to import only one hook in the components
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
