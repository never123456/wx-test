const loadUserInfo = (fn)=>{
  wx.getUserInfo({
    success: (e) => {
      fn(e);
    }
  })
}
module.exports = {
  loadUserInfo
}