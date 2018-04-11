import axios from 'axios';

export function getImages(cb) {
  axios.get('https://api.unsplash.com/photos/?client_id=bf365bce717906563189252ef51fd8c5a57324b347ffc68a05f72ced06613f1b')
    .then((res) => {
      console.log(res.data);
      cb(null, res.data);
    })
    .catch((err) => {
      console.log(err);
      cb(err);
    });
}

export function getMoreImages(page, cb) {
  axios.get(`https://api.unsplash.com/photos/?client_id=bf365bce717906563189252ef51fd8c5a57324b347ffc68a05f72ced06613f1b&page=${page}`)
    .then((res) => {
      console.log(res.data);
      cb(null, res.data);
    })
    .catch((err) => {
      console.log(err);
      cb(err);
    });
}
