import './App.css';
import Home from './Home'
import Procedures from './Procedures'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contacts from './Contacts'
import Procedure from './Procedure'


//we get a <Router /> component, we get <Route />, we get <Link />

//build contact component
function App() {
  return (
    
    <Router>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/Procedures'>Procedures</Link>
          <Link to='/Contacts'>Contacts</Link>
          <Link to='/Procedures/cavity'>Cavity</Link>
        </nav>
        <>
          <Route exact path='/' component={Home} />
          <Route exact path='/Procedures' component={Procedures} />
          <Route path='/Procedures/:type' render={(props)=> {
            return <Procedure {...props} />
          }} />
          <Route path='/Contacts' component={Contacts} />
        </>
    </Router>
  );
}

export default App;
