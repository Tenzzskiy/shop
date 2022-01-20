import { useState, useEffect } from "react";
// // Usage
// function App() {
//     const size = useWindowSize();
//     return (
//         <div>
//             {size.width}px / {size.height}px
//         </div>
//     );
// }

 export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}