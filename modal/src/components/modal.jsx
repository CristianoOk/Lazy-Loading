import { useRef } from "react";
import styles from "./modal.module.scss"

export default function Modal({children, title, root}){ //Con children, básicamente estoy creando un componente base, y con children permito que se modifique una cirta parte de se estructura. Pensálo como si tuvieras las estructura de un formulario, con una parte que podés modificar, ya sea agrando o sustrayendo campos.
  const ref = useRef(null);

  function callback(e) {
    root.unmount(); //desmonta el componente Modal de React.
    document.querySelector("#modal")?.remove(); //borra del DOM el `div` con id `"modal"` si existe.El `?.` (operador optional chaining) evita errores si `#modal` no existe.
  }

  function handleClick() {
    ref.current.classList.add(styles.fadeOut); //agrega la clase CSS para iniciar la animación de salida (fadeOut).
    ref.current.addEventListener("animationend", callback, {once: true}) //escucha cuando termina la animación y ejecuta callback.El {once: true} asegura que se ejecuta una sola vez y se elimina solo.
  }
  
  return (
    <div ref={ref} className={styles.modalContainer}>
      <div className={styles.modalView}>
        <div className={styles.modalHeader}>
          <div>{title}</div>
          <div>
            <button onClick={handleClick} className={styles.closeButton}>X</button>
          </div>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}