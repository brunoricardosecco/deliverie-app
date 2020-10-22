import api from './api';

export const getAll = (): any => {
  return api.request({
    method: 'GET',
    url: 'orders',
  });
};
