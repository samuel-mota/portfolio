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

interface MenuContextData {
  menuActive: boolean;
  changeMenuState: () => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextData);
export const MenuContext = createContext({} as MenuContextData);

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  function changeDarkModeState() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  function changeMenuState() {
    menuActive ? setMenuActive(false) : setMenuActive(true);
  }

  useEffect(() => {
    setDarkMode(localStorage.getItem("sam_darkMode") === "true");
  }, []);

  useEffect(() => {
    darkMode
      ? document.querySelector("body").classList.add("dark")
      : document.querySelector("body").classList.remove("dark");

    localStorage.setItem("sam_darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, changeDarkModeState }}>
      <MenuContext.Provider value={{ menuActive, changeMenuState }}>
        {children}
      </MenuContext.Provider>
    </DarkModeContext.Provider>
  );
}

// abstraction to import only the hook in the components
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const useMenu = () => {
  return useContext(MenuContext);
};
