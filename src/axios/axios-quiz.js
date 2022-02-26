import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-1d5c9-default-rtdb.firebaseio.com/'
})