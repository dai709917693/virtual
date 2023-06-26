import { instance, updateToken } from './base'

export const apiAuth = {
  async login(username: string, password: string) {
    const res = await instance.post('v1/auth/login', { username, password })
    updateToken(res.data)
    return res
  }
}
