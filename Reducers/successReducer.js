import React from "react";
import * as actionTypes from "../Actions/action-types";

const initialState={
    success:false,
    successMessage:""
};

function successReducer(state=initialState,action) {
  switch(action.type){
      case actionTypes.FETCH_LEVIES_SUCCESS:
          return{
              ...state,
              success:true,
              successMessage: action.data
          };

      case actionTypes.FETCH_EXTENSIONS_SUCCESS:
          return{
              ...state,
              success:true,
              successMessage: action.data
          };
      case actionTypes.FETCH_BENEFITS_SUCCESS:
          return{
              ...state,
              success:true,
              successMessage: action.data
          };

      case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
          return{
              ...state,
              success:true,
              successMessage: action.data
          };

      case actionTypes.FETCH_CUSTOMER_DETAILS_SUCCESS:
          return{
              ...state,
              success:true,
              successMessage: action.data
          };

      case actionTypes.FETCH_LOADING_SUCCESS:
          return{
              ...state,
              success:true,
              successMessage: action.data
          };
      default:
          return state;
  }
}
export  default successReducer;