
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { Home } from "./views/public/Home";
import { useEffect } from "react";
import { IStaticMethods } from "flyonui/flyonui";


// Declaración de la propiedad HSStaticMethods en Window
declare global {
    interface Window {
      HSStaticMethods: IStaticMethods; // Usamos el tipo que ya importaste
    }
  }
// Componente para inicializar Flyonui
const FlyonuiInitializer = () => {
    const location = useLocation(); // useLocation debe estar dentro del contexto de BrowserRouter
  
    useEffect(() => {
      const loadFlyonui = async () => {
        await import('flyonui/flyonui');
        if (window.HSStaticMethods) {
          window.HSStaticMethods.autoInit(); // Inicializa el método
        }
      };
      loadFlyonui();
    }, [location.pathname]); // Se ejecuta cuando cambia la ruta
  
    return null; // No necesitamos renderizar nada
  };


export default function Router() {
    
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            {/* Este componente se encarga de inicializar Flyonui */}
      <FlyonuiInitializer />
            <Routes>
                <Route element={<PublicLayout />} >
                    <Route path="/" element={<Home/>} index />
                   
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}