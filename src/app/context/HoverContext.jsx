import React, { createContext, useState } from 'react';

export const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
    const [isHoveredGlobal, setIsHoveredGlobal] = useState(false);

    return (
        <HoverContext.Provider value={{ isHoveredGlobal, setGlobalHover: setIsHoveredGlobal }}>
            {children}
        </HoverContext.Provider>
    );
};