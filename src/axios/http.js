import axios from 'axios';

let http = axios.create({
//   baseURL: 'http://linux.fushoukeji.com/donghuan_api',
  withCredentials: true,
  headers: {    
    'x-htwl-waste':sessionStorage.getItem("userMsg")||"",
    'x-htwl-waste-token':sessionStorage.getItem("token")||""
    },
  transformRequest: [function (data) {
    let newData = new FormData();;
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData.append(k,data[k]);
      }
    }
    return newData;
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    if(res.status===200){
      var _data = res.data;
      response(_data);
    }
    
  }).catch(function (err) {
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}