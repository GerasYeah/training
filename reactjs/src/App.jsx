import './App.css'

import FunctionalComponent from './components/FunctionalComponent.jsx';
import PropsExample from './components/PropsExample.jsx';
import ClassComponent from './components/ClassComponents.jsx';

function App() {

  return (
    <>
      <FunctionalComponent/>
      <PropsExample title="propriedades" />
      <ClassComponent/>
    </>
  )
}

export default App;