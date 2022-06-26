import React, { Component } from 'react';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: ''

        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});

    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});

    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});

    }


    saveStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log('student => ' + JSON.stringify(student));
    }

     
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-cemter'>Add Student</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name</label>
                                        <input placeholder='First Name' name="firstname" className='form-control' 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name</label>
                                        <input placeholder='Last Name' name="lastname" className='form-control' 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input placeholder='Email' name="email" className='form-control' 
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveStudent}>Save</button>
                                    <button className='btn btn-danger' onClick={event =>  window.location.href='/students'} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        );
    }
}

export default CreateStudentComponent;