import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/index'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div>

        <Index />

      </div>
   
    
      </Router>  
    </>
  );
}

export default App;
