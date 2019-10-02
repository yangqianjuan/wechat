import request from '@/utils/request'

export function saveAccountInfo(options) {
  return request.post('account/save', options)
}

export function checkAccount(options) {
  return request.post('account/check', options)
}

export function listOrgTree() {
  return request.post('account/org/tree')
}

export function listAccount(options) {
  return request.post('account/list', options)
}

export function getEditAccountInfo(options) {
  return request.post('account/edit', options)
}

export function deleteAccount(options) {
  return request.post('account/delete', options)
}

export function listAccountOptions(options) {
  return request.post('account/options/account', options)
}

export function listNameOptions(options) {
  return request.post('account/options/name', options)
}

export function listRoles(options) {
  return request.post('account/role/list', options)
}

export function saveRole(options) {
  return request.post('account/role/save', options)
}

export function getRoleDetail(options) {
  return request.post('account/role/detail', options)
}

export function editRole(options) {
  return request.post('account/role/edit', options)
}

export function deleteRole(options) {
  return request.post('account/role/delete', options)
}

export function checkRole(options) {
  return request.post('account/role/check', options)
}

export function listRoleOptions(options) {
  return request.post('account/options/role', options)
}

export function listPermissionTree(options) {
  return request.post('account/permission/tree', options)
}

export function listPermissionAreaTree(options) {
  return request.post('account/permission/area/tree', options)
}

export function brandChange(options) {
  return request.post('account/brand/change', options)
}

export function getUserInfo(options) {
  return request.post('account/user/info', options)
}

export function checkPassWord(options) {
  return request.post('account/password/check', options)
}

export function updatePassword(options) {
  return request.post('account/password/update', options)
}
export function resetPassword(options) {
  return request.post('account/password/reset', options)
}
export function rightListRoleOptions(options) {
  return request.post('account/role/permission', options)
}

export function getWechatCode(options) {
  return request.get(
    `/api/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect`,
    { params: options }
  )
}
