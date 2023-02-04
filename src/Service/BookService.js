import axios from "axios";

class BookService {
    baseUrl ="http://localhost:8081/book";

    addBook(data) {
        return axios.post(`${this.baseUrl}/create`, data);
      }
    
      getAllBooks() {
        return axios.get(`${this.baseUrl}/get-all`);
      }

      getBookById(employeeId) {
        return axios.get(`${this.baseUrl}/search/${employeeId}`);
      }
    }
    // eslint-disable-next-line import/no-anonymous-default-export
    export default new BookService();
