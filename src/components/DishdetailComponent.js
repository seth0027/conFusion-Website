import React,{Component} from 'react'
import { Card, CardImg,CardText, CardBody,
    CardTitle } from 'reactstrap';


class Dishdetail extends Component{

    

    renderDish(dish){
return(<Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody onClick={()=>{this.setState({comments: dish.comments})}}>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>)
    }
    renderComments(comments){
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

    render(){
        var dish=this.props.dish

        if (dish != null)
        return(
            <div className='container'>
            <div className='row'>
            <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
            </div>
            <div className="col-12 col-md-5 m-1">

                {this.renderComments(dish.comments)}
            </div>
            </div>
            </div>
        );
    else
        return(
            <div></div>
        );
    }
}

export default Dishdetail