import React from 'react'
import { Card, CardImg,CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import CommentForm from './CommentFormComponent'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
    

     function RenderDish(props){
         
        
        const dish=props.dish
return(<Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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

                   <CommentForm dishId={props.dishId} addComment={props.addComment}/>
               </div>
           )
       }
       else{

        return(<div></div>)
       }

    }

    const Dishdetail=(props)=>{
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null){
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

                
                <RenderComments comments={comments}
                
                dishId={props.dish.id}
                
                addComment={props.addComment}/>
            </div>
            </div>
            </div>
        );
        }
    else
        return(
            <div></div>
        );
    }


export default Dishdetail