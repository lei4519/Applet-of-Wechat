// pages/shopList/shopList.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    page: 0,
    limit: 10,
    shopsInfo: []
  },
  getShopsInfo() {
    this.setData({ page: this.data.page + 1 })
    app.promiseRequest({
      url: `https://locally.uieee.com/categories/${this.data.id}/shops?_page=${this.data.page}&_limit=${this.data.limit}`
    }).then(res => {
      this.setData({ shopsInfo: this.data.shopsInfo.concat(res.data) })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ id: options.id || 1 })
    console.log(this.data.id)
    switch (parseInt(this.data.id)) {
      case 1:
        wx.setNavigationBarTitle({ title: '美食' })
        break;
      case 2:
        wx.setNavigationBarTitle({ title: '洗浴足疗' })
        break;
      case 3:
        wx.setNavigationBarTitle({ title: '结婚啦' })
        break;
      case 4:
        wx.setNavigationBarTitle({ title: '卡拉OK' })
        break;
    }
    
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getShopsInfo()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})