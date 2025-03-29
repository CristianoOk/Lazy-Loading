import './App.css'
import {openModal, openModalAccount} from './components/openmodal.jsx'

function App() {
  function handleOpenModal(){
    openModal();
  }
  function handleOpenModal2(){
    openModalAccount();
  }
  
  return (
      <div className='App'>
        <button onClick={handleOpenModal}>Abrir modal</button>
        <button onClick={handleOpenModal2}>Abrir modal</button>
      </div>
  )
}

export default App
