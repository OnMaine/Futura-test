import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://appcontent.fx2.io/api/content/frontend-test`,
  headers: {
    Authorization: 'sg6QVn2Mgkwu3yAD3gCAgMW1sE4T9SUo'
  }
})

