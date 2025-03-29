import React, {Suspense, lazy} from "react"; //{Suspense, lazy}: Son funciones de React para carga diferida de componentes. lazy: permite cargar un componente de forma asíncrona (cuando se necesite). Suspense: se usa para mostrar un contenido provisional (fallback) mientras se carga el componente lazy.                     
import { createRoot } from "react-dom/client"; //createRoot: desde React 18+, se usa para crear un punto de entrada a la aplicación React (antes se usaba ReactDOM.render).
import ModalLoading from "./modalLoading";



export function openModal() {
  //const Modal = lazy(() => import("./modal")); //Aquí se carga de forma dinámica y perezosa (lazy) el componente Modal. lazy(() => import('./modal')) significa: "importa el componente sólo cuando lo vaya a usar".
  const Modal = lazy(() => import("./modalSetting"))
  const modalDiv = document.createElement("div"); //Se crea un nuevo elemento div en el DOM (HTML)
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv); //Se añade ese div al final del body del documento HTML, para que pueda usarse como contenedor del modal.

  const root = createRoot(modalDiv); //Se crea una "raíz React" en ese div que acabamos de agregar. A partir de ahí, se puede renderizar contenido React dentro de ese nodo del DOM.


  /*Se usa root.render() para renderizar contenido React dentro del modalDiv.
  Suspense se usa porque el componente Modal es cargado de forma lazy. Mientras se carga, se muestra el contenido fallback: <div>Loading...</div>.*/
  root.render(
    <Suspense fallback={<ModalLoading />}> 
      <Modal root={root} title="Modal de configuraciones" />
    </Suspense>
  );
}

export function openModalAccount() {
  const Modal = lazy(() => import("./modalAccount"))
  const modalDiv = document.createElement("div"); 
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv); 

  const root = createRoot(modalDiv); 
  root.render(
    <Suspense fallback={<ModalLoading />}> 
      <Modal root={root} title="Modal de tu cuenta" />
    </Suspense>
  );
}