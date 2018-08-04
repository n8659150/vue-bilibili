import axios from 'axios'

export const getSeasonRecommends = createRecommendRequest('global', 'bangumiRankCallback')

export const getCnRecommends = createRecommendRequest('cn', 'guochuangRankCallback')

function createRecommendRequest(type, jsonpCallbackName) {
  return () => {
    return axios.get(`https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=${type}`)
      .then(res => {
        res = res.data
        if (typeof res === 'object') {
          return res.result.list
        } else {
          // jsonp处理
          return new Function(`
                    var ${jsonpCallbackName} = function(res) {
                      return res.result.list
                    }
                    return ${res}
                  `)()
        }
      })
  }
}

export const fallbackSeasonRecommends = () => {
  return axios.get("static/json/season.json")
    .then(res => res.data.list)
}

export const fallbackCnRecommends = () => {
  return axios.get("static/json/cn.json")
    .then(res => res.data.list)
}

export const getShortVideos = () => {
  return axios.get("static/json/douyin.json")
    .then(res => res.data)
}