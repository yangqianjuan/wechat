import request from '@/utils/request'
import crypto from 'crypto'

export function login(username, password) {
  const hash = crypto.createHash('md5')
  hash.update(password)
  password = hash.digest('hex')
  return request.post('/xm/sns/api/login', { username, password })
}

// export function login(username, password) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data: { username, password }
//   })
// }

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'post',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'post',
    params: { token }
  })
}
