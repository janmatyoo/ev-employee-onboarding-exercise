import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label  } from 'reactstrap'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       employees: [], 
       regexp: /^[0-9\b]+$/,
       newEmployeeModal: false,
       editEmployeeModal: false,
       newEmployeeData: {
         id: '',
         first_name: '',
         last_name: ''
       },
       editEmployeeData: {
        id: '',
        first_name: '',
        last_name: ''
      }
    }
  }

  getAllEmployees() {
    axios.get('http://localhost:80/employees')
    .then((response) => {
      this.setState({ 
        employees: response.data 
      })
      console.log(response)
    }, (error) => {
      console.log(error)
    });
  }

  getSpecificEmployee(id) {
    axios.get('http://localhost:80/employees/' + id)
    .then((response) => {
      this.setState({ 
        editEmployeeData: response.data 
      })
      console.log(response)
    }, (error) => {
      console.log(error)
    });
  }

  componentWillMount() {
    this.getAllEmployees()
  }

  addEmployee() {
    const {id, first_name, last_name} = this.state.newEmployeeData;

    if (id === '' || first_name === '' || last_name === '') {
      alert('All fields are required')
    }
    else {
      axios.post('http://localhost:80/employees', this.state.newEmployeeData)
      .then((response) => {
        alert(response.data.message)
  
        this.setState({
          newEmployeeModal: false,
          newEmployeeData: {
            id: '',
            first_name: '',
            last_name: ''
          }
        })
        this.getAllEmployees()
        console.log(response)
      }, (error) => {
        console.log(error)
      });
    }
  }

  updateEmployee () {
    const {id, first_name, last_name} = this.state.editEmployeeData;

    if (id === '' || first_name === '' || last_name === '') {
      alert('All fields are required')
    }
    else {
      axios.put('http://localhost:80/employees/' + id, {
        first_name, last_name
      })
      .then((response) => {
        alert(response.data.message)
  
        this.setState({
          editEmployeeModal: false,
          editEmployeeData: {
            id: '',
            first_name: '',
            last_name: ''
          }
        })
        this.getAllEmployees()
        console.log(response)
      }, (error) => {
        console.log(error)
      });
    }
  }

  deleteEmployee(id) {
    console.log(id)
    axios.delete('http://localhost:80/employees/' + id)
    .then((response) => {
      alert(response.data.message)
      this.getAllEmployees()
      console.log(response)
    }, (error) => {
      console.log(error)
    });
  }

  toggleNewEmployeeModal() {
    this.setState({
      newEmployeeModal: ! this.state.newEmployeeModal
    })
  }

  toggleEditEmployeeModal() {
    this.setState({
      editEmployeeModal: ! this.state.editEmployeeModal
    })
  }

  editEmployee(id) {
    this.getSpecificEmployee(id)
    this.setState({
      editEmployeeModal: ! this.state.editEmployeeModal
    })
  }

  

  render() {

    let employees = this.state.employees.map((employee) => {
      return (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.first_name}</td>
          <td>{employee.last_name} </td>
          <td><Button color="success" size="sm" onClick={this.editEmployee.bind(this, employee.id)}>Edit</Button></td>
          <td><Button color="danger" size="sm" onClick={this.deleteEmployee.bind(this, employee.id)}>Delete</Button></td>
        </tr>
      )
    })

    return (
      <div className="App container">
        <h1>Employees</h1>

        <Button className="my-3" color="primary" onClick={this.toggleNewEmployeeModal.bind(this)}>Add Employee</Button>

        {/* Add New Employee */}
        <Modal isOpen={this.state.newEmployeeModal} toggle={this.toggleNewEmployeeModal.bind(this)}>
          <ModalHeader toggle={this.toggleNewEmployeeModal.bind(this)}>Add New Employee</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="id">Id</Label>
              <Input id="id" value={this.state.newEmployeeData.id} onChange={(e) => {
                let { newEmployeeData } = this.state;
                newEmployeeData.id = parseInt(e.target.value);

                if (newEmployeeData.id === '' || this.state.regexp.test(newEmployeeData.id)) {
                  this.setState({newEmployeeData})
                }
              }} />
            </FormGroup>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input id="first_name" value={this.state.newEmployeeData.first_name} onChange={(e) => {
                let { newEmployeeData } = this.state;
                newEmployeeData.first_name = e.target.value;
                this.setState({newEmployeeData})
              }} />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input id="last_name" value={this.state.newEmployeeData.last_name} onChange={(e) => {
                let { newEmployeeData } = this.state;
                newEmployeeData.last_name = e.target.value;
                this.setState({newEmployeeData})
              }} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addEmployee.bind(this)}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewEmployeeModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

         {/* Edit Selected Employee */}
        <Modal isOpen={this.state.editEmployeeModal} toggle={this.toggleEditEmployeeModal.bind(this)}>
          <ModalHeader toggle={this.toggleEditEmployeeModal.bind(this)}>Edit Selected Employee</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="id">Id</Label>
              <Input id="id" value={this.state.editEmployeeData.id} disabled onChange={(e) => {
                let { editEmployeeData } = this.state;
                editEmployeeData.id = e.target.value;

                if (editEmployeeData.id === '' || this.state.regexp.test(editEmployeeData.id)) {
                  this.setState({editEmployeeData})
                }
              }} />
            </FormGroup>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input id="first_name" value={this.state.editEmployeeData.first_name} onChange={(e) => {
                let { editEmployeeData } = this.state;
                editEmployeeData.first_name = e.target.value;
                this.setState({editEmployeeData})
              }} />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input id="last_name" value={this.state.editEmployeeData.last_name} onChange={(e) => {
                let { editEmployeeData } = this.state;
                editEmployeeData.last_name = e.target.value;
                this.setState({editEmployeeData})
              }} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateEmployee.bind(this)}>Update</Button>{' '}
            <Button color="secondary" onClick={this.toggleEditEmployeeModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees}
          </tbody>
        </Table>
        
      </div>
    )
  }
}

export default App;
