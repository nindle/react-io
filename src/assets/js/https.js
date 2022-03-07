import axios from 'axios'

//获取header
const getHeader = function () {
  let header = {}
  return header
}

//获取API
const getAPI = function (url, data = {}) {
  // url = url
  //   .split('/')
  //   .map(e => {
  //     let text = e

  //     if (text.indexOf(':') === 0) {
  //       let key = text.substr(1)
  //       text = data[key] ?? ''
  //       delete data[key]
  //     }

  //     return text
  //   })
  //   .join('/')

  // for (let k in SYS.API) {
  //   let reg = new RegExp(`%${k}%`)
  //   url = url.replace(reg, SYS.API[k])
  // }

  // if (data.token && store.state.token) {
  //   data.token = store.state.token
  // }

  return url
}

//创建get请求
const createGet = function (url, data = {}) {
  let ajax = getAPI(url, data)

  let headers = {
    ...getHeader()
  }

  if (data.token) {
    headers.token = data.token
    delete data.token
  }

  return axios.get(ajax, {
    params: data,
    headers,
  })
}

//创建post请求
const createPost = function (url, data = {}) {
  let ajax = getAPI(url, data)

  let headers = {
    'Content-Type': 'application/json',
    ...getHeader()
  }

  if (data.token) {
    headers.token = data.token
    delete data.token
  }

  return axios.post(ajax, data, {
    headers,
  })
}

//创建form请求
const createForm = function (url, data = {}) {
  let ajax = getAPI(url, data)

  let headers = {
    'Content-Type': 'application/json',
    ...getHeader()
  }

  if (data.token) {
    headers.token = data.token
    delete data.token
  }

  let formData = new FormData()
  for (let k in data) {
    formData.append(k, data[k])
  }

  return axios.post(ajax, formData, {
    headers,
  })
}

//创建all请求
const createAll = function (list) {
  let allData = list.map(e => {
    switch (e.mode) {
      case 'get':
        return createGet(e.url, e.data)
      case 'form':
        return createForm(e.url, e.data)
      case 'post':
      default:
        return createPost(e.url, e.data)
    }
  })
  return axios.all(allData)
}

//创建relay请求
const createRelay = function (list, interval, step) {
  return new Promise(function (resolve, reject) {
    let flag = 0
    let result = []
    const work = function () {
      http({
        ...list[flag],
      })
        .then(data => {
          result[flag] = data
          flag++
          if (typeof step === 'function') {
            step(data, flag - 1)
          }
          if (flag === list.length) {
            resolve(result)
            return
          }
          if (interval) {
            setTimeout(() => {
              work()
            }, interval)
          } else {
            work()
          }
        })
        .catch(text => {
          reject(text)
        })
    }
    work()
  })
}

//请求
const http = function ({ mode = 'post', url, data = {}, all = [], interval, step }) {
  switch (mode) {
    case 'get':
      return http.get(url, data)
    case 'form':
      return http.form(url, data)
    case 'all':
      return http.all(all)
    case 'relay':
      return http.relay(all, interval, step)
    case 'post':
    default:
      return http.post(url, data)
  }
}

http.api = getAPI

http.post = function (url, data = {}) {
  return new Promise(function (resolve) {
    createPost(url, data)
      .then(data => {
        resolve(data.data)
      })
      .catch(() => {
        resolve({
          success: false,
        })
      })
  })
}

http.get = function (url, data = {}) {
  return new Promise(function (resolve) {
    createGet(url, data)
      .then(data => {
        resolve(data.data)
      })
      .catch(() => {
        resolve({
          success: false,
        })
      })
  })
}

http.form = function (url, data = {}) {
  return new Promise(function (resolve) {
    createForm(url, data)
      .then(data => {
        resolve(data.data)
      })
      .catch(() => {
        resolve({
          success: false,
        })
      })
  })
}

http.all = function (list = []) {
  if (!list.length) return []
  return new Promise(function (resolve, reject) {
    createAll(list)
      .then(data => {
        resolve(data.map(e => e.data))
      })
      .catch(text => {
        reject(text)
      })
  })
}

http.relay = function (list = [], interval = 0, step) {
  if (!list.length) return []
  return new Promise(function (resolve, reject) {
    createRelay(list, interval, step)
      .then(data => {
        resolve(data)
      })
      .catch(text => {
        reject(text)
      })
  })
}

export { http }
