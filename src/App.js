import './App.css';
import './index.css';

import Shipment from './components/Shipment';
import PurchaseList from './components/PurchaseList';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <section className="App">
      <h1>Hello World</h1>
      <PurchaseList />
      <Shipment />
    </section>
  );
}

export default App;
