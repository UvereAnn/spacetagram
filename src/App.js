import react, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row,Form, FormControl, Button, Image, Spinner } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { HeartFill,Heart} from 'react-bootstrap-icons';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import Typewriter from 'typewriter-effect';


function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [toggleHeart, setToggleHeart] = useState(false);

  
  const changeColor = (() => {
    setToggleHeart(!toggleHeart)
  }, [])

  const fetchData = async () => {
    await axios
      .get('https://api.nasa.gov/planetary/apod?api_key=JtsaQCf6fKMYAQ2Gcs3H1N8devsk85smEyahaIaU')
      .then((response) => {
        setIsLoading(false);
        setItems(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div><Spinner animation="border" /></div>;
  }

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="var-text">
        {isReadMore ? text.slice(0, 50) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };


  return (
    <div className="App">
      <Navigation />
      <Container>
        <h1 id='header-title'> <Typewriter
                options={{
                strings: ['Image-sharing from the final frontier'],
                autoStart: true,
                loop: true,
            }}
           
            /></h1>

        <Row>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12} md={12}>
                {isError && <div>Error fetching data.</div>}
                <Image 
                  src={items.url} 
                  style={{
                    width: '100%', 
                    height: 'auto'}}
                  />
              </Col>
              <Col xs={12} md={12}>
                  <div className='icons'>
                    <a><HeartFill className={
                      toggleHeart ? 'active' : 'heart'
                      } onClick={changeColor}
                    /></a>
                  <span id="span-date">{items.date}</span>
                  </div>
                  <h5 id="title"><span><b>Title: </b></span>{items.title}</h5>
                  <p id='description'>
                    <ReadMore><b>Description:</b> {items.explanation}</ReadMore>
                  </p> 
                  <p><span><b>Copyright:</b> &copy;</span>{items.copyright}</p>

              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12} md={12}>
                {isError && <div>Error fetching data.</div>}
                <Image 
                  src={items.url} 
                  style={{
                    width: '100%', 
                    height: 'auto'}}
                  />
              </Col>
              <Col xs={12} md={12}>
                  <div className='icons'>
                    <a><HeartFill className={
                      toggleHeart ? 'active' : 'heart'
                      } onClick={changeColor}
                    /></a>
                  <span id="span-date">{items.date}</span>
                  </div>
                  <h5 id="title"><span><b>Title: </b></span>{items.title}</h5>
                  <p id='description'><span><b>Description:</b> </span>{items.explanation}</p>
                  <p><span><b>Copyright:</b> &copy;</span>{items.copyright}</p>

              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12} md={12}>
                {isError && <div>Error fetching data.</div>}
                <Image 
                  src={items.url} 
                  style={{
                    width: '100%', 
                    height: 'auto'}}
                  />
              </Col>
              <Col xs={12} md={12}>
                  <div className='icons'>
                    <a><HeartFill className={
                      toggleHeart ? 'active' : 'heart'
                      } onClick={changeColor}
                    /></a>
                  <span id="span-date">{items.date}</span>
                  </div>
                  <h5 id="title"><span><b>Title: </b></span>{items.title}</h5>
                  <p id='description'><span><b>Description:</b> </span>{items.explanation}</p>
                  <p><span><b>Copyright:</b> &copy;</span>{items.copyright}</p>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
