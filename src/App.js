import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './App.css'

function App() {

  const [items, setItems] = useState([])
  const [show, setShow] = useState(3)

  const loadMore = () => {
    setShow((prevValue) => prevValue + 3)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setItems(data))
  }, [])
  return (
    <div className="App bg-dark">
      <Container>
        <Row>
          <Col md={{span:6, offset:3}}>
            {items.slice(0, show).map(item => (
              <div className='bg-light rounded-lg m-2 p-2'>
                <span className="bg-dark rounded-circle px-2 text-white">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
            <button className="btn btn-outline-warning" onClick={loadMore}>
              <i class="fa fa-arrow-down mr-2 text-white" aria-hidden="true"></i>
              Load More
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
