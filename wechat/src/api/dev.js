import request from '@/utils/request'

export function listTimesMatch(options) {
  return request.post('dev/times/match', options)
}
