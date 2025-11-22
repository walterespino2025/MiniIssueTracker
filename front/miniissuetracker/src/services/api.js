import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';

axios.defaults.baseURL="https://localhost:7089/api/"

function adddBodyData(data){
  axios.defaults.data=data;
}

const httpService={
  get:axios.get,
  post: axios.post,
  put:axios.put,
  delete:axios.delete,
  adddBodyData
}

export default httpService;