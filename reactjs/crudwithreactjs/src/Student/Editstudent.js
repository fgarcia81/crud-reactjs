import React from 'react';
import axios from 'axios';
import '../Student/Addstudent.css';
import { useHistory } from 'react-router-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

class Editstudent extends React.Component {
    
    constructor(props) {
        super(props);

        

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRollNo = this.onChangeRollNo.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            RollNo: '',
            Class: '',
            Address: ''
        }
    }

    componentDidMount() {

        axios.get('https://localhost:44386/Api/Student/StudentdetailById?id=' + this.props.match.params.id)
            .then(r => {
                this.setState({
                    Name : r.data.Name,
                    RollNo : r.data.RollNo,
                    Class : r.data.Class,
                    Address : r.data.Address
                });
            }).catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangeRollNo(e) {
        this.setState({
            RollNo: e.target.value
        });
    }
    onChangeClass(e) {
        this.setState({
            Class: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        });
    }

    onSubmit(e) {        
        e.preventDefault();
        const obj = {
            Id : this.props.match.params.id,
            Name: this.state.Name,
            RollNo: this.state.RollNo,
            Class: this.state.Class,
            Address: this.state.Address
        };

        axios.post('https://localhost:44386/Api/Student/AddorUpdatestudent', obj)
            .then(res =>{
                this.props.history.push('/Studentlist');
                console.log(res.data);
            });
    }

  


    render() {
        return (            
            <Container className="App">
                <h4 className='PageHeading'>Update Student Information</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="Name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName} placeholder="Enter Name"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>RollNo</Label>
                            <Col sm={10}>
                                <Input type="text" name="RollNo" value={this.state.RollNo} onChange={this.onChangeRollNo} placeholder="Enter RollNo"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Class" sm={2}>Class</Label>
                            <Col sm={10}>
                                <Input type="text" name="Class" value={this.state.Class} onChange={this.onChangeClass} placeholder="Enter Class"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Address" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input type="text" name="Address" value={this.state.Address} onChange={this.onChangeAddress} placeholder="Enter Address"></Input>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}></Col>
                            <Col sm={1}><Button type="submit" className="btn btn-success">Submit</Button>{' '}</Col>
                            <Col sm={1}><Button className="btn btn-danger">Cancel</Button>{' '}</Col>
                            <Col sm={5}></Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default Editstudent;