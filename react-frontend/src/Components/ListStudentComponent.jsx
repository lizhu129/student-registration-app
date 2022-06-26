import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }

    }  
    
    componentDidMount() {
        StudentsService.getStudents().then(res => {
            this.setState({students: res.data});
        });
    }


    editStudent(Id) {
        this.props.history.push('/update/$(id)');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={event =>  window.location.href='/add'}>Add Student</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key = {student.Id}>
                                        <td> {student.firstName} </td>
                                        <td> {student.lastName} </td>
                                        <td> {student.email} </td>   
                                        <td>
                                            <button onClick={() => this.editStudent(student.Id)} className='btn btn-info'>Update</button>
                                        </td>                              
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListStudentComponent;