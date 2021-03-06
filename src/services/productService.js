import axios from "axios"

export default class ProductService{
     getProducts(){
         return axios.get("http://localhost:8080/api/products/getAll")
     }

     getByProductId(productId){
        return axios.get("http://localhost:8080/api/products/getByProductId?productId="+productId)
    }

    addProduct(product){
        return axios.post("http://localhost:8080/api/products/add",product)
    }
}       