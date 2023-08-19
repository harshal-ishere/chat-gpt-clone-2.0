import Sidebar from "./components/sidebar";
import Home from "./components/home";
import "./App.css";
import { useSelector} from 'react-redux';
// import { toggle } from "../../Store/slices/counter";

function App() {
  const count = useSelector((state) => state.counter);
  return (
    <div className="App">
    {count?<Sidebar vis="invincible" />:<Sidebar />}
     <Home />
    </div>
  );
}

export default App;
