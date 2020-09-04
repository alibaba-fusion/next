import { Droppable } from 'cabala-react-beautiful-dnd';
import App from './view/app';
import Context from './view/context';
import VirtualTree from './view/tree';

App.Droppable = Droppable;
App.Context = Context;
App.Tree = VirtualTree;

export default App;
