import '../App.css';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'reactstrap';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function initProducts() {
      await fetch(`http://localhost:3001/users/all`)
          .then(response => response.json())
          .then(response => {
              setProducts(response);
              console.log(response);
          })
          .catch(err => console.error(err));
    }
  
    initProducts()
  },[])
  
  return (
    <Container>
        <Row>
            <Col>
                <h1>Last 10 Products Sales</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Description</th>
                            <th>Grade</th>
                            <th>Serial Number</th>
                            <th>Packing</th>
                            <th>Observation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => 
                            <tr key={product.model}>
                                <td> {product.category}</td>
                                <td>{product.manufaturer}</td>
                                <td> {product.model}</td>
                                <td> {product.description}</td>
                                <td> {product.grade}</td>
                                <td> {product.serial_number}</td>
                                <td> {product.packing}</td>
                                <td> {product.observation}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    
      </Container>
  );
}

export default App;

