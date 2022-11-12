// Imports
import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import { GoSettings } from 'react-icons/go';
import { Row, Col, Button, Form } from 'react-bootstrap';


// Styles
import './App.css';
import styled from 'styled-components';
// import { Nav } from "react-bootstrap";

// Components
import NavbarH from './Components/NavbarH';
import NavbarV from './Components/NavbarV';
import Buttons from './Components/Buttons';
import Dashboard from './Components/Dashboard';
import PopupForm from './Components/Popup';
import DashboardFilter from './Components/DashboardFilter';

// Styled Components
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin: 20px;
`;


function App() {

  // Set up body of GET request

  const [filterData, setFilterData] = useState({});

  const setField = (field, value) => {
    setFilterData({
      ...filterData,
      [field]: value
    });
  }

  // Make GET reponse and display the results
  const [filteredCases, setFilteredCases] = useState([]);
  async function getFilteredCases() {
    try {
      const response = await Axios.get('http://localhost:9000/cases/filter', { params: {filter_category: filterData.category, filter_query: filterData.query} });
      setFilteredCases(response.data);
    } catch (err) {
      console.log(err);
    };
  }
  useEffect(() => {
    getFilteredCases();
  }, []);

  const navigate = useNavigate();
  const handleFilterClick = () => {
    navigate('/filter');
  }
  const handleFilterSubmitClick = (e) => {
    getFilteredCases();
    navigate('/filter-results');
  }

  const handleEndofFilter = () => {
    navigate('/');
  }
  return (
    <div className="Main">
      <NavbarH />
      <NavbarV />

      <Routes>

        {/* Route 1*/}
        <Route path="/" element={
          <>
            <Container>
              <Row>
                <Buttons image={"https://cdn-icons-png.flaticon.com/512/1092/1092216.png"} text={"Case Upload"} color={"#27c690"} />
                <Buttons image={"https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png"} text={"Generate Report"} color={"#0461c9"} />
                <Buttons image={"https://cdn-icons-png.flaticon.com/512/207/207413.png"} text={"Broadcast Message"} color={"#db6028"} />
              </Row>
            </Container>

            <Container>
              <StyledDiv>
                <Button variant="secondary" onClick={handleFilterClick} >Filter<GoSettings /></Button>
              </StyledDiv>
            </Container>



            <Container>
              <Tabs
                defaultActiveKey="New"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
              >
                <Tab eventKey="New" title="New/Unread Cases">
                  <Dashboard new={1} />
                </Tab>
                <Tab eventKey="Closed" title="Outstanding/Closed Cases">
                  <Dashboard new={2} />
                </Tab>
              </Tabs>
            </Container>
          </>
        } />

        {/* Route 2*/}
        <Route path="/case-upload" element={<Wrapper>
          <PopupForm />
        </Wrapper>} />

        {/* Route 3*/}
        <Route path="/filter" element={
          <Container>
            <Form>
              <Form.Group className="mb-1" controlId="filtering">
                <Form.Label>Enter your category and filter query</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={filterData.category}
                  onChange={e => setField('category', e.target.value)}
                >
                  <option>Select Header</option>
                  <option value="branch">Branch</option>
                  <option value="reporting_method">Reporting Method</option>
                  <option value="category">Category</option>
                  <option value="sub_category">Sub-Category</option>
                  <option value="date_time">Date-Time (MM-DD-YY HH:MM:SS)</option>
                  <option value="priority_status">Priority</option>
                  <option value="nature">Nature</option>
                  <option value="case_manager">Manager</option>
                  <option value="case_reporter">Reporter</option>
                  <option value="case_status">Status</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-1" controlId="filtering2">
                <Form.Control
                  type="text"
                  placeholder="Select value to be filtered by"
                  value={filterData.query}
                  onChange={(e) => setField('query', e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className='mt-2' onClick={handleFilterSubmitClick}>
                Submit
              </Button>
            </Form>
          </Container>

        } />

        {/* Route 4 */}
        <Route path="/filter-results" element={
          <Container>
            <Button variant="primary" type="submit" className='mt-2' onClick={handleEndofFilter}>
              Back Home
            </Button>
            <DashboardFilter filteredCases={filteredCases} />
          </Container>
        } />


      </Routes>

    </div >
  );
}

export default App;
