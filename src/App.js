import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Create from './component/Create';
import Detail from './component/Detail';
import Home from './component/Home';
import List from './component/List';
import Search from './component/Search';
import Update from './component/Update';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="info" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Demo-Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link ><Link to="/"><FontAwesomeIcon icon={faHome}/>&nbsp;Home</Link></Nav.Link>
                <Nav.Link ><Link to="/list"><FontAwesomeIcon icon={faListUl}/>&nbsp;List</Link></Nav.Link>
                <Nav.Link ><Link to="/create"><FontAwesomeIcon icon={faPlus}/>&nbsp;Create</Link></Nav.Link>
                <Nav.Link ><Link to="/search"><FontAwesomeIcon icon={faSearch}/>&nbsp;Search</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />} ></Route>
          <Route path="/create" element={<Create />} ></Route>
          <Route path="/search" element={<Search />} ></Route>
          <Route path="/detail" element={<Detail />} ></Route>
          <Route path="/update/:id" element={<Update />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
