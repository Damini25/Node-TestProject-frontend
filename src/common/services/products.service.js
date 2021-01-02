import axios from 'axios';
import {env} from '../utilities/environment';

export const getProductsList = () => { 
    return axios.get(`${env.apiUrl}/user/getProductsList`).then(response => ({ response:response.data }))
    .catch(error => ({ error }));
  }

  export const addProduct = (payload) => { 
    console.log('in service add product',payload)
    return axios.post(`${env.apiUrl}/admin/addProduct`,payload,null).then(response => ({ response:response.data }))
    .catch(error => ({ error }));
  }

  export const getProductDataById = (id) => { 
    //console.log('in service get product data by id',id)
    return axios.get(`${env.apiUrl}/admin/getProduct/${id}`).then(response => ({ response:response.data }))
    .catch(error => ({ error }));
  }

  export const deleteProductData=(id) => { 
    console.log('in service delete product',id)
    return axios.delete(`${env.apiUrl}/admin/deleteProduct/${id}`,null,null).then(response => ({ response:response.data }))
    .catch(error => ({ error }));
  }