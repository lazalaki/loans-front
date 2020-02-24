import axios from 'axios'

const axiosInstance = axios.create({
  headers: {
    common: {
      'Accept': 'application/json'
    },
    post: {
      'Accept': 'application/json'
    },
    patch: {
      'Accept': 'application/json'
    }
  }
  /* other custom settings */
})

const ApiService = {

  // Stores the 401 interceptor position so that it can be later ejected when needed
  _401interceptor: null,

  init (baseURL) {
    axiosInstance.defaults.baseURL = baseURL
  },

  get (resource) {
    return axiosInstance.get(resource)
  },

  post (resource, data) {
    return axiosInstance.post(resource, data)
  },

  put (resource, data) {
    return axiosInstance.put(resource, data)
  },

  patch (resource, data) {
    return axiosInstance.patch(resource, data)
  },

  delete (resource) {
    return axiosInstance.delete(resource)
  },

  mountInterceptors: function () {
    axiosInstance.interceptors.request.use(async function (config) {
      return config;
    }, function(error) {
      return Promise.reject(error);
    })
    axiosInstance.interceptors.response.use(async function (config) {
      return config.data
    }, function (error) {
      return Promise.reject(error.response.data)
    })
  }
}

export default ApiService