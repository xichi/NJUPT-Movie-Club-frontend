import axios from 'axios';

/* export const baseURL = process.env.PRODUCTION_ENV === "production"
  ? process.env.VUE_APP_API_URL
  : "http://localhost:3000"; */

let request = axios.create({
  //baseURL: `${baseURL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('njupt_movie_club_token')}`
  }
});

//登录
export const login = (username, password) => {
  return request.post('/api/admin/login', {
      username,
      password
  })
}

//退出登录
export const signout = () => {
  return request.get('/api/admin/signout');
}

//获取用户信息
export const getUserInfo = () => {
  return request.get('/api/admin/info');
}

//注册
export const register = (username, password, code, email) => {
  return request.post('/api/admin/register', {
      username,
      password,
      code,
      email
  })
}

//获取所有用户信息
export const getAllUsersInfo = (limit, offset) => {
  return request.get(`/api/admin/all?limit=${limit}&?offset=${offset}`);
}

//获取邮箱验证码
export const getEmailCode = (email) => {
  return request.post('/api/admin/code',{
    email
  });
}

//影评
export const getMovieReview = () => {
  return request.get('/api/movieReview');
};

//详细影评
export const getMovieReviewDetail = id => {
  return request.get(`/api/movieReview?id=${id}`);
};

//本周电影
export const getLatestMovies = () => {
  return request.get('/api/latestMovies');
};