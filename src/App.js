import './App.css';
import './index.css';

import PurchaseList from './components/PurchaseList';
import PurchaseListItem from './components/PurchaseListItem';
import ShipmentList from './components/ShipmentList';
import ShipmentListItem from './components/ShipmentListItem';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <section className='App'>
      <div className='form-content'>
      <h1>Hello World</h1>
      <PurchaseList />
      <ShipmentList />
      </div>
    </section>
  );
}

export default App;
