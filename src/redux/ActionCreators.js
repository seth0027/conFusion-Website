import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl'

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});


export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    fetch(`${baseUrl}dishes`).then(response=>response.json()).then(data=>dispatch(addDishes(data)))
}

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));

    fetch(`${baseUrl}promotions`).then(response=>response.json()).then(data=>dispatch(addPromotions(data)))
}


export const fetchComments = () => (dispatch) => {

    

    fetch(`${baseUrl}comments`).then(response=>response.json()).then(data=>dispatch(addComments(data)))
}


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const addPromotions = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const addComments= (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});