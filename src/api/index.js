import axios from 'axios';

const { port, hostname } = window.location;

export const baseURL = process.env.VUE_APP_API_URL || `http://${hostname}${port ? `:${port}` : ''}/api/v1`; // 线上地址

let request = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('njupt_movie_club_token')}`
  }
});

// test
export const getTopics = () => {
  return request.get('/topics');
};
// 获取用户信息
export const getUserinfo = () => request.get('/user').then(res => res.data);