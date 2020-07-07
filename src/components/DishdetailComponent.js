import React,{Component} from 'react'
import { Card, CardImg,CardText, CardBody,
    CardTitle } from 'reactstrap';




    

     function RenderDish(props){
         const dish=props.dish
return(<Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody onClick={()=>{this.setState({comments: dish.comments})}}>
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
               </div>
           )
       }
       else{

        return(<div></div>)
       }

    }

    const Dishdetail=(props)=>{
        var dish=props.dish

        if (dish != null)
        return(
            <div className='container'>
            <div className='row'>
            <div className="col-12 col-md-5 m-1">
            
            <RenderDish dish={dish}/>
            </div>
            <div className="col-12 col-md-5 m-1">

                
                <RenderComments comments={dish.comments}/>
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