import request from '@/utils/request.js'

// 获取链接列表
export const getLinkListAPI = (link_cate_id) => {
  return request.get(`/link/list/${link_cate_id}`)
}