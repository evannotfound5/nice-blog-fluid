import request from '@/utils/request.js'

// 获取文章列表
export const getArticleListAPI = (params) => {
  return request.get('/article/list', {
    params
  })
}

// 获取文章详情
export const getArticleDetailAPI = (article_id) => {
  return request.get(`/article/detail/${article_id}`)
}