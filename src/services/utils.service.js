export const isImageUrl = link => {
  return /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i.test(link);
};

export const isUrl = link => {
  return /^https?\:\/\/(www\.)?([a-z0-9\-]+)(\.[a-z0-9\-]+)+(\/[^\s]+)*\/?$/i
    .test(link);
};

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));