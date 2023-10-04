import * as actionTypes from "./action-types";

export const fetchLeviesRequest=()=>{
    return{
  type:actionTypes.FETCH_LEVIES_REQUEST
    }
};

export const fetchLeviesSuccess=data=>{
    return{
        type:actionTypes.FETCH_LEVIES_SUCCESS,
        data:data
    }
};
export const fetchLeviesFailure=data=>{
    return{
        type:actionTypes.FETCH_LEVIES_FAILURE,
        data:data
    }
};


export const fetchExtensionsRequest=()=>{
    return{
        type:actionTypes.FETCH_EXTENSIONS_REQUEST
    }
};

export const fetchExtensionsSuccess=data=>{
    return{
        type:actionTypes.FETCH_EXTENSIONS_SUCCESS,
        data:data
    }
};
export const fetchExtensionsFailure=data=>{
    return{
        type:actionTypes.FETCH_EXTENSIONS_FAILURE,
        data:data
    }
};

export const fetchBenefitsRequest=()=>{
    return{
        type:actionTypes.FETCH_BENEFITS_REQUEST
    }
};

export const fetchBenefitsSuccess=data=>{
    return{
        type:actionTypes.FETCH_BENEFITS_SUCCESS,
        data:data
    }
};
export const fetchBenefitsFailure=data=>{
    return{
        type:actionTypes.FETCH_BENEFITS_FAILURE,
        data:data
    }
};

export const fetchTransactionsRequest=()=>{
    return{
        type:actionTypes.FETCH_TRANSACTIONS_REQUEST
    }
};

export const fetchTransactionsSuccess=data=>{
    return{
        type:actionTypes.FETCH_TRANSACTIONS_SUCCESS,
        data:data
    }
};
export const fetchTransactionsFailure=data=>{
    return{
        type:actionTypes.FETCH_TRANSACTIONS_FAILURE,
        data:data
    }
};

export const fetchCustomerDetailsRequest=()=>{
    return{
        type:actionTypes.FETCH_CUSTOMER_DETAILS_REQUEST
    }
};

export const fetchCustomerDetailsSuccess=data=>{
    return{
        type:actionTypes.FETCH_CUSTOMER_DETAILS_SUCCESS,
        data:data
    }
};
export const fetchCustomerDetailsFailure=data=>{
    return{
        type:actionTypes.FETCH_CUSTOMER_DETAILS_FAILURE,
        data:data
    }
};

export const fetchLoadingRequest=()=>{
    return{
        type:actionTypes.FETCH_LOADING_REQUEST
    }
};

export const fetchLoadingSuccess=data=>{
    return{
        type:actionTypes.FETCH_LOADING_SUCCESS,
        data:data
    }
};
export const fetchLoadingFailure=data=>{
    return{
        type:actionTypes.FETCH_LOADING_FAILURE,
        data:data
    }
};