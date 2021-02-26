import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';


export default class StudentList extends Component {


    constructor(props) {
        super(props);
        this.state = { business: [] };
    }

    componentDidMount() {

        axios.get('https://localhost:44386/Api/Student/Getstudent')
            .then(r => {
                this.setState({ business: r.data })
            }).catch(function (e) {
                console.log(e);
            })
    }


    tabRow() {
        return this.state.business.map(function (object, i) {
            return <Table obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h4 align="center">Student List</h4>
                <table className="table table-striped" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>RollNo</th>
                            <th>Class</th>
                            <th>Address</th>
                            <th colSpan="4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}