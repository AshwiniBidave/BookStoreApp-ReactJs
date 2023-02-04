import axios from "axios";
const token=localStorage.getItem('Token')


class UserService {

    baseUrl = 'http://localhost:8081/user'


    userRegistration = (user) => {
        console.log(user);
        
        return axios.post(`${this.baseUrl}/create`, user);
    }
    getAllUser() {
        return axios.get(`${this.baseUrl}/get-all`);
      }

      getUserById(userid) {
        return axios.get(`${this.baseUrl}/get/${userid}`,{params:{token: token}});
      }
    userLogin(data) {
        return axios.post(`${this.baseUrl}/login`,data);
      }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();