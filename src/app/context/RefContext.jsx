import React, { createContext, useContext, useRef, useEffect } from 'react';

// Crear el contexto
const RefContext = createContext(null);

// Proveedor de contexto para compartir las refs
export function RefProvider({ children }) {
    const descriptionRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);

    return (
        <RefContext.Provider value={{ descriptionRef, experienceRef, projectsRef }}>
            {children}
        </RefContext.Provider>
    );
}

// Hook para usar el contexto
export function useRefs() {
    return useContext(RefContext);
}
