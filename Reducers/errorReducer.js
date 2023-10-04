import React from "react";
import *  as actionType from "../Actions/action-types";

const initialState = {
    error:false,
    errorMessage:""
};

function errorReducer(state=initialState, action) {

    switch (action.type) {
        case actionType.FETCH_LEVIES_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.data
            };

        case actionType.FETCH_EXTENSIONS_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.data
            };

        case actionType.FETCH_BENEFITS_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.data
            };

        case actionType.FETCH_TRANSACTIONS_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.data
            };

        case actionType.FETCH_CUSTOMER_DETAILS_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.data
            };

        case actionType.FETCH_LOADING_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.data
            };
        default:
            return state;

    }

}

export  default errorReducer;

