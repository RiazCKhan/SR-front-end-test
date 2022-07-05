import Main from './components/Main';

import './App.css';
import './index.css';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

function App() {



  return (
    <section className='main'>
      <div className='form-content'>
        <h1>Form Title</h1>
        <Main />
      </div>
    </section>
  );
}

export default App;
