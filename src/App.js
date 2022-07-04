import './App.css';
import './index.css';

import PurchaseList from './components/PurchaseList';
import PurchaseListItem from './components/PurchaseListItem';
import Shipment from './components/Shipment';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <section className='App'>
      <h1>Hello World</h1>
      <PurchaseList />
    </section>
  );
}

export default App;
