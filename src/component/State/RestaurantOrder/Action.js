import{
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    GET_RESTAURANT_ORDER_REQEST,
    GET_RESTAURANT_ORDER_SUCCESS,
    GET_RESTAURANT_ORDER_FAILURE,   
} from "./ActionTypes";
import {api} from "../../config/api";

import { UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionTypes";

export const updateOrderStatus = ({orderId, orderStatus, jwt}) => {
    return async (dispatch)=>{
         try{
            dispatch({type:UPDATE_ORDER_STATUS_REQUEST});
            const response = await api.put(`/api/amin/orders/${orderId}`, {orderStatus}, {
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            });
            

        const updateOrder = response.data;
        dispatch({type:UPDATE_ORDER_STATUS_SUCCESS, payload:updateOrder});
        console.log("update order status",updateOrder);
    }
    catch(error){
        dispatch({type:UPDATE_ORDER_STATUS_FAILURE, payload:error});
        console.log("error",error);
    };
}
}
    
    export const fetchRestaurantsOrder = ({restaurantId, orderStatus, jwt}) => {
        return async (dispatch)=>{
            try{
                dispatch({type:GET_RESTAURANT_ORDER_REQEST});
                const { data } = await api.get(`/api/admin/orders/restaurant/${restaurantId}`, {
                    params:{order_Status:orderStatus},
                    headers:{
                        Authorization: `Bearer ${jwt}`
                    }
                });
                const orders  = data;
                dispatch({type:GET_RESTAURANT_ORDER_SUCCESS, payload:orders});
                console.log("restaurant order",orders);
            }
            catch(error){
                dispatch({type:GET_RESTAURANT_ORDER_FAILURE, payload:error});
                console.log("error",error);
            };
    };
};
