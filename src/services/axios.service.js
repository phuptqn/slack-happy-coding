import axios from 'axios';

export const request = (url, options, config = {}) => {
  config.headers = options.headers || {};
  config.headers.Authorization = `Bearer ${process.env.SLACK_BOT_TOKEN}`;
  options.token = options.token || process.env.SLACK_BOT_TOKEN;

  return axios.post(url, options, config);
}