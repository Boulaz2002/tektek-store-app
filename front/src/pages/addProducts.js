import { useState } from "react";
import { postFetch } from "./fetcher";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { categoryList, gradeList, packingTypeList } from "../components/ConstantList";
import { Col, Container, Row } from "reactstrap";
function MyForm() {
    const [inputs, setInputs] = useState({});

  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    
    
    let handleSubmit = (e) => {
        e.preventDefault();
        postFetch(inputs)
      };


  
    return (
        <Container >
            
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select type="text" placeholder="Choose Article Category" name="category" value={inputs.category || ""} onChange={handleChange}  >
                            {categoryList.map((item)=>{
                                return <option key={item}>{item || "Laptop"}</option>
                            })}
                        </Form.Select>
                    </Col>
                    <Col xs lg="3">
                        <Form.Label>Manufacturer: </Form.Label>
                        <Form.Control type="text" placeholder="Type the Brand" name="manufaturer" value={inputs.manufaturer || ""} onChange={handleChange} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form.Label>Model: </Form.Label>
                        <Form.Control type="text" placeholder="Type the Model" name="model"  value={inputs.model || ""} onChange={handleChange} />
                    </Col>
                    <Col xs lg="3">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text"  placeholder="Description" name="description"  value={inputs.description || ""} onChange={handleChange}   />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form.Label>UPC: </Form.Label>
                        <Form.Control type="text" placeholder="Type UPC" name="upc"  value={inputs.upc || ""} onChange={handleChange} />
                    </Col>
                    <Col xs lg="3">
                        <Form.Label>Serial Number:</Form.Label>
                        <Form.Control type="text"  placeholder="serial_number" name="serial_number"  value={inputs.serial_number || ""} onChange={handleChange}   />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form.Label>Grade: </Form.Label>
                        <Form.Select type="text" placeholder="Choose Grade BASED on Physical" name="grade"  value={inputs.grade || ""} onChange={handleChange}  >
                            {gradeList.map((item)=>{
                                return <option key={item}>{item || "Laptop"}</option>
                            })}
                        </Form.Select>
                    </Col>
                    <Col xs lg="3">
                        <Form.Label>Packing: </Form.Label>
                        <Form.Select type="text" name="packing" value={inputs.packing || ""} onChange={handleChange} >
                            {packingTypeList.map((item)=>{
                                return <option key={item}>{item || "Laptop"}</option>
                            })}
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form.Label>Buy Price: </Form.Label>
                        <Form.Control type="number" placeholder="Type Price" name="buy_price"  value={inputs.buy_price || 0} onChange={handleChange} />
                    </Col>
                    <Col xs lg="3">
                        <Form.Label>Qty:</Form.Label>
                        <Form.Control type="number"  placeholder="qty" name="qty"  value={inputs.qty || 1} onChange={handleChange}   />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form.Label>Buy Date: </Form.Label>
                        <Form.Control type="date" name="buy_date"  value={inputs.buy_date || ""} onChange={handleChange} />
                    </Col>
                    <Col xs lg="3">
                        <Form.Label>Estimate Retail Price:</Form.Label>
                        <Form.Control type="number"  placeholder="est_retail_price" name="est_retail_price"  value={inputs.est_retail_price || 0} onChange={handleChange}   />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form.Label>Sale Price: </Form.Label>
                        <Form.Control type="number" name="sale_price"  value={inputs.sale_price || 0} onChange={handleChange} />
                    </Col>
                    <Col xs lg="3">
                        <Form.Label>Sale DAte:</Form.Label>
                        <Form.Control type="date"  placeholder="sale_date" name="esale_date"  value={inputs.sale_date || ""} onChange={handleChange}   />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <Form.Label>observation: </Form.Label>
                        <Form.Control type="text" name="observation"  value={inputs.observation || ""} onChange={handleChange} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col >
                </Row>
        </Form>
        </Container>
        
      
    )
  }

  export default MyForm;