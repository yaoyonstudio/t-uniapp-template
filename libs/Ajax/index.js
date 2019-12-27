
export default async (url, params, method = 'GET') => {
  if (!url) throw new Error("ajax request without url.")
  const _headers = {
    'content-type': 'application/json',
  }
  if (uni.getStorageSync('token')) {
    _headers['Authorization'] = `Bearer ${uni.getStorageSync('token')}`
  }
  
  return await new Promise((resolve, reject) => {
    uni.request({
      url: url,
      data: params,
      method: method,
      header: _headers,
      success: res => {
        const { statusCode, data } = res
        if (statusCode === 200) {
            resolve(res.data)
        } else {
          console.log('Ajax Error:', res)
          reject(res)
        }
      },
      fail: error => {
        console.log('Ajax Error:', error)
        return reject(error)
      }
    })
  })
}

