import React,{Component} from 'react'
import { 
    Button, Modal, ModalHeader, ModalBody,
    Row, Label } from 'reactstrap';

import {Control,LocalForm,Errors} from 'react-redux-form'

const required=(val)=>val && val.length
const maxLength=(len)=>(val)=> val && val.length<=len 
const minLength=(len)=>(val)=> val && val.length>=len
const isNumber=(val)=>!isNaN(val)


class CommentForm extends Component{


    constructor(props){
        super(props)
        this.state={
            isModalOpen: false
        }
    }

    toggleModal=()=> {
        this.setState(state=>({
          isModalOpen: !state.isModalOpen
        }));
      }

      handleSubmit=(values)=>{
        this.props.addComment(this.props.dishId,values.rating,values.name,values.comment)
      }

      
    render(){

        return(
            <React.Fragment>

<Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody className='m-4'>
            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
            <Row className="form-group">
                        <Label htmlFor="rating">Rating</Label>
                        
                    </Row>
                    <Row><Control.select name="rating" model='.rating' id='.rating' className="form-control" validators={{isNumber}}>
                            <option>Give Ratings</option>
                            <option>1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>
                                </Control.select>
                                <Errors model='.rating'
                                show='touched'
                                className='text-danger'
                                messages={{isNumber: "Please select a rating"}}/>
                                
                                </Row>
                    <Row className='form-group'>
                        <Label htmlFor="name">Your Name</Label>
                        </Row>
                        <Row className='form-group'>
                        <Control.text  className="form-control" model='.name' id="name" name="name"
                            validators={{required,minLength: minLength(3), maxLength: maxLength(15) }}/>
                            <Errors model='.name' show='touched' className='text-danger' messages={{required: "Name is required ",minLength: "Name should be atleast 3 characters",maxLength: "Name should be 15 characters or less"}}/>
                    </Row>
                    <Row className='form-group'>
                        <Label htmlFor="comment">Comment</Label>
                        </Row>
                        <Row className='form-group'>
                        <Control.textarea
                         model='.comment' id="comment" name="comment" rows='6'
                         className="form-control"  />
                    </Row>
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </LocalForm>
                
            
            </ModalBody>
        </Modal> 

        </React.Fragment>
        )
    }

}

export default CommentForm