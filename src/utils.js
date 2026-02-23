import { useState, useEffect } from "react";

// Ширина экрана
const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const resizeScreen = () => setWidth(window.innerWidth)
        window.addEventListener('resize', resizeScreen)

        return () => window.removeEventListener('resize', resizeScreen);
    }, [])

    return width
}

export { useWindowWidth }

// Замена класса шрифта

const useReplacementClass = (def = "", screenSettings = []) => {
    const [currentFontClass, setCurrentFontClass] = useState(def);
    const width = useWindowWidth();

    useEffect(() => {
        if (screenSettings.length > 0) {
            const sortedSettings = [...screenSettings].sort((a, b) => a.maxWidth - b.maxWidth);
            for (let setting of sortedSettings) {
                if (width <= setting.maxWidth) {
                    setCurrentFontClass(setting.fontClass);
                    break; 
                }
                else {
                    setCurrentFontClass(def)
                }
            }
        } else {
            setCurrentFontClass(def);
        }
    }, [width, screenSettings, def]); 

    return currentFontClass;
}

export { useReplacementClass }








