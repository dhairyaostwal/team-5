import React, { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import {Modal,Button,Card,Form,} from 'react-bootstrap'

import './ViewPosts.css';



function ViewPosts() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [status,setStatus]= useState(false)
  const onSharePost = ()=>{
    console.log(status)
    setStatus(true);
    console.log(status)
}
const onClickingClose=()=>{
  setStatus(false);
}

const onClickingSave=()=>{
  setStatus(false)
}
  return (
  <>
      <NavbarComponent/>
      <div className="container ">
        <div className="row mt-5">
          

       
        <>
      <Button variant="success" onClick={handleShow}>
        Create a Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" height={50} width={50}></img> Creating Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title goes here"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>   
        
         
        </div>
        <div className="row mt-5 text-center justify-content-center">
          <div className="col-11  col-md-6">
      <Card class="card_css" style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className='text-justify '>Urgent need of an energy investor</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Enterprenuer</Card.Subtitle>
          <Card.Text className='mt-3'>
          Can anybody here provide me with the contact of an energy investor. We…
          </Card.Text>
          <Card.Link href="#">Contact</Card.Link>
        </Card.Body>
        </Card>
          </div>

          <div className="col-11  col-md-6">
          <Card class="card_css" style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className='text-justify '>Looking for employees in the react field</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Investor</Card.Subtitle>
          <Card.Text className='mt-3'>
          It will be very helpful if we can achieve details of potential react employees
          </Card.Text>
          <Card.Link href="#">Contact</Card.Link>
        </Card.Body>
        </Card>
          </div>



          <div className="col-11  col-md-6">
          <Card class="card_css" style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className='text-justify '>Urgent need of an energy investor</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Enterprenuer</Card.Subtitle>
          <Card.Text className='mt-3'>
          Can anybody here provide me with the contact of an energy investor. We need it on an urgent basis.
          </Card.Text>
          <Card.Link href="#">Contact</Card.Link>
        </Card.Body>
        </Card>
          </div>

          <div className="col-11  col-md-6">
          <Card class="card_css" style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className='text-justify '>Need assistance in ML</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Enterprenuer</Card.Subtitle>
          <Card.Text className='mt-3'>
          We are looking for guidance in making a ML-based model. Any help is appreciated.
           </Card.Text>
          <Card.Link href="#">Contact</Card.Link>
        </Card.Body>
        </Card>
          </div>
       
          </div>
       

      </div>





    
   </>
  )
}

export default ViewPosts

