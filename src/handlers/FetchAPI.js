import { HOSTNAME, PATH, PROTOCOL } from '../values/constants';

const postReq = (url, data) => {
  return fetch(`${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const Register = (data) => {
  return postReq('api/signUp', data);
};

const getTransactions = async(walletId, skip, limit) => {
  return fetch(`${PROTOCOL}${HOSTNAME}/${PATH}/transactions?walletId=${walletId}&skip=${skip}&limit=${limit}`).then((res) => res.json());
};

export default {
  Register,
  getTransactions,
};