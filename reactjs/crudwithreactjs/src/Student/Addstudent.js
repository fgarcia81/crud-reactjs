import React from 'react';
import axios from 'axios';
import '../Student/Addstudent.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

class Addstudent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { Name: '', RollNo: '', Class: '', Address: '' };
    }


    Addstudent = () => {
        axios.post('https://localhost:44386/Api/Student/AddorUpdatestudent',
            {
                Name: this.state.Name,
                RollNo: this.state.RollNo,
                Class: this.state.Class,
                Address: this.state.Address
            })
            .then(json => {

                if (json.data.Status === 'Success') {
                    console.log(json.data.Status);
                    alert("Data save successfully");
                    this.props.history.push('/Studentlist');
                } else {
                    alert('Data not saved');
                    this.props.history.push('/Studentlist');
                }
            })
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Enter student informations</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="enter name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="name" sm={2}>RollNo</Label>
                            <Col sm={10}>
                                <Input type="text" name="RollNo" onChange={this.handleChange} value={this.state.RollNo} placeholder="enter rollNo" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="name" sm={2}>Class</Label>
                            <Col sm={10}>
                                <Input type="text" name="Class" onChange={this.handleChange} value={this.state.Class} placeholder="enter Class" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="name" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input type="text" name="Address" onChange={this.handleChange} value={this.state.Address} placeholder="enter Address" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}></Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <button className="btn btn-danger">Cancel</button>{' '}
                            </Col>
                            <Col sm={5}></Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default Addstudent;