// pages/shopList/shopList.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    page: 0,
    limit: 20,
    shopsInfo: [],
    moreFlag: true
  },
  getShopsInfo() {
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: 'loading...'
    })
    this.setData({ page: this.data.page + 1 })
    app.promiseRequest({
      url: `https://locally.uieee.com/categories/${this.data.id}/shops?_page=${this.data.page}&_limit=${this.data.limit}`
    }).then(res => {
      wx.hideNavigationBarLoading()
      wx.hideLoading()
      if (res.data && res.data.length){
        this.setData({ shopsInfo: this.data.shopsInfo.concat(res.data) })
      } else {
        this.setData({ moreFlag: false})
        wx.showToast({
          title: '没有数据了',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options.id && this.setData({ id: options.id })
    options.title && wx.setNavigationBarTitle({ title: options.title })
    this.getShopsInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      page: 0,
      shopsInfo: [],
      moreFlag: true
    })
    this.getShopsInfo()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.moreFlag && this.getShopsInfo()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})