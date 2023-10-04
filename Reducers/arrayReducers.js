import React from "react";
import *  as actionType from "../Actions/action-types";

const initialState = {
   levies:[],
    extensions:[],
    benefits:[],
    transaction:[],
    customer_details:[],
    loading:[],
    request:false
};


function arrayReducers (state=initialState, action) {

    switch (action.type) {
        case actionType.FETCH_LEVIES_REQUEST:
            return {
                ...state,
                request:!state.request
            };

        case actionType.FETCH_LEVIES_SUCCESS:
            return  {
                ...state,
                levies: [...state.levies, action.data]

            };

        case actionType.FETCH_EXTENSIONS_REQUEST:
            return {
                ...state,
                request:!state.request
            };

        case actionType.FETCH_EXTENSIONS_SUCCESS:
            return  {
                ...state,
                extensions: [...state.extensions, action.data]

            };

        case actionType.FETCH_BENEFITS_REQUEST:
            return {
                ...state,
                request:!state.request
            };

        case actionType.FETCH_BENEFITS_SUCCESS:
            return  {
                ...state,
                benefits: [...state.benefits, action.data]

            };

        case actionType.FETCH_TRANSACTIONS_REQUEST:
            return {
                ...state,
                request:!state.request
            };

        case actionType.FETCH_TRANSACTIONS_SUCCESS:
            return  {
                ...state,
                transaction: [...state.transaction, action.data]

            };

        case actionType.FETCH_CUSTOMER_DETAILS_REQUEST:
            return {
                ...state,
                request:!state.request
            };

        case actionType.FETCH_CUSTOMER_DETAILS_SUCCESS:
            return  {
                ...state,
                customer_details: [...state.customer_details, action.data]

            };

        case actionType.FETCH_LOADING_REQUEST:
            return {
                ...state,
                request:!state.request
            };

        case actionType.FETCH_LOADING_SUCCESS:
            return  {
                ...state,
                loading: [...state.loading, action.data]

            };
        default:
            return state;

    }

}

export default arrayReducers;