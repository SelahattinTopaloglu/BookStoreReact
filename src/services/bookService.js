import axios from "axios"

export default class BookService{
    getBooks(){
        return axios.get("http://localhost:5000/api/Books/getall2")
    }
    getByBookId(id){
        return axios.get("http://localhost:5000/api/Books/getbyid2?id="+id)
    }
}