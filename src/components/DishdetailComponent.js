import React,{Component} from 'react'
import { Card, CardImg,CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import CommentForm from './CommentFormComponent'


    

     function RenderDish(props){
         const dish=props.dish
return(<Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody >
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>)
    }
   function RenderComments(props){
       const comments=props.comments
       if(comments){ 
           return(
               <div >
                   <h4>Comments</h4>
                   <ul className='list-unstyled'>
           {comments.map((com)=>(<li key={com.id}>{com.comment}<ul><li>{`${com.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}`}</li></ul></li>))}
                   </ul>

                   <CommentForm/>
               </div>
           )
       }
       else{

        return(<div></div>)
       }

    }

    const Dishdetail=(props)=>{
        var dish=props.dish
        var comments=props.comments

        if (dish != null)
        return(
            <div className='container'>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className='row'>
            <div className="col-12 col-md-5 m-1">
            
            <RenderDish dish={dish}/>
            </div>
            <div className="col-12 col-md-5 m-1">

                
                <RenderComments comments={comments}/>
            </div>
            </div>
            </div>
        );
    else
        return(
            <div></div>
        );
    }


export default Dishdetail