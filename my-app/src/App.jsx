import {Canvas} from "@react-three/fiber";
import './App.css';
import Experience from "./components/Experience";
import Configurator from './components/Configurator';

function App() {

  return (
      <div className='App'>
        <Canvas>
          <color attach="background" args={['#213547']} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>

  )
}

export default App
