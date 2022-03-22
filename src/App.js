import {useState} from 'react'
import Buton from './components/Buton';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  let increment=()=>{
    setCount(count+1);
  }
  return (
    <div>
<h1>Butona {count} kere tıklandı</h1>

<Buton action={increment}></Buton>

    </div>
  )
}

export default App