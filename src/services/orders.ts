import api from './api';

export const getAll = (): any => {
  return api.request({
    method: 'GET',
    url: 'orders',
  });
};

export const create = (data): any => {
  return api.request({
    method: 'POST',
    url: 'orders',
    data,
  });
};
