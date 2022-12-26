import axios from 'axios';
import { getLocalStorageToken } from './local-storage-fn';

const baseURL = 'https://pre-onboarding-selection-task.shop';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const authAxios = axios.create({
  baseURL,
  headers,
});

authAxios.interceptors.request.use((config) => {
  const accessToken = getLocalStorageToken();
  if (accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response: errorResponse } = error;
    const { request: errorResquest } = error;
    const errorResp = error.response.data.message;
    if (errorResponse) {
      // 인증 에러 발생시
      if (errorResponse.status === 401 && errorResp === 'Unauthorized') {
        alert('아이디와 비밀번호를 확인해주세요.');
      } else if (
        errorResponse.status === 400 &&
        error.response.data.message === '동일한 이메일이 이미 존재합니다.'
      ) {
        alert('해당 이메일은 이미 존재합니다!');
      } else {
        alert('올바른 아이디와 비밀번호를 입력해주세요.');
      }
    } else if (errorResquest) {
      alert(
        '로그인/회원가입 요청이 거절되었습니다. 네트워크를 확인하거나 다시 시도해주세요',
      );
    } else {
      alert('test!~');
    }
  },
);

export const todosAxios = axios.create({
  baseURL,
  headers,
});

todosAxios.interceptors.request.use((config) => {
  const accessToken = getLocalStorageToken();
  if (accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

todosAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response: errorResponse } = error;
    const { request: errorResquest } = error;
    const errorResp = error.response.data.message;
    if (errorResponse) {
      // 인증 에러 발생시
      if (errorResponse.status === 401 && errorResp === 'Unauthorized') {
        alert('로그아웃 되었습니다.다시 로그인 해주세요.');
      } else {
        alert('올바른 값을 입력해주세요.');
      }
    } else if (errorResquest) {
      alert('잘못된 요청입니다. 네트워크를 확인하거나 다시 시도해주세요');
    } else {
      alert('test!~');
    }
  },
);
