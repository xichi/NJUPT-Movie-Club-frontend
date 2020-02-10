import axios from 'axios';

const { port, hostname } = window.location;

export const mockURL = "http://localhost:3000" || `/${hostname}${port ? `:${port}` : ''}`; // mock地址

let request = axios.create({
  baseURL: `${mockURL}`
});

//用户信息
export const mockGetUserInfo = () => {
  return request.get('/userInfo');
};

//影评
export const mockGetMovieReview = () => {
  return request.get('/movieReview');
};