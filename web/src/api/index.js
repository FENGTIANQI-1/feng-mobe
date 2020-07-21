import request from '@/utils/request'

// 首页轮播广告
export function fetchHomeAds (params) {
  return request({
    url: '/ads/home',
    method: 'get',
    params
  })
}

// 首页新闻数据
export function fetchNewsListOne (params) {
  return request({
    url: '/news/listOne',
    method: 'get',
    params
  })
}

// 新闻列表数据
export function fetchNewsListTwo (params) {
  return request({
    url: '/news/listTwo',
    method: 'get',
    params
  })
}

// 文章详情
export function fetchArticle (params) {
  return request({
    url: '/article/item',
    method: 'get',
    params
  })
}

// 首页英雄数据
export function fetchHeroListOne (params) {
  return request({
    url: '/hero/listOne',
    method: 'get',
    params
  })
}

// 英雄列表数据
export function fetchHeroListTwo (params) {
  return request({
    url: '/hero/listTwo',
    method: 'get',
    params
  })
}

// 英雄详情
export function fetchHero (params) {
  return request({
    url: '/hero/item',
    method: 'get',
    params
  })
}

// 首页视频数据
export function fetchVideoListOne (params) {
  return request({
    url: '/video/listOne',
    method: 'get',
    params
  })
}

