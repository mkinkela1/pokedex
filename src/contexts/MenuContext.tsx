import React, {createContext, useState} from "react";

interface MenuContextProviderProps {
  showMenu: Boolean,
  toggleMenu: () => void,
  children: React.ReactNode
}

export const MenuContext = createContext<Partial<MenuContextProviderProps>>({});

const MenuContextProvider = ({children}: Partial<MenuContextProviderProps>) => {

  const [showMenu, setShowMenu] = useState<Boolean> (false);

  const toggleMenu = () => setShowMenu(prevState => !prevState);

  return (
    <MenuContext.Provider value={{
      showMenu,
      toggleMenu
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider;