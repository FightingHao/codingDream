// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: true,
    carts: [],
    totalPrice: 0,
    selectAllStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  getTotalPrice() {
    let carts = this.data.carts
    let total = 0
    carts.forEach((item, index) => {
      if(item.selected) {
        total += item.price * item.num
      }
    })
    this.setData({
      totalPrice: total.toFixed(2)
    })
    console.log(this.data.totalPrice)
  },

  selectedList(e) {
    let index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts[index].selected = !carts[index].selected
    let selectedCount = 0
    for (const cart of carts) {
      if(cart.selected) {
        selectedCount++
      }
    }
    let isAllSelected = false
    if(selectedCount === carts.length) {
      isAllSelected = true
    }
    this.setData({
      carts,
      selectAllStatus: isAllSelected
    })
    this.getTotalPrice()
  },

  deleteList(e) {
    let index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts = carts.filter((item, i) => {
      return i != index
    })
    this.setData({
      carts
    })

    if(!carts.length) {
      this.setData({
        hasList: false
      })
    }

    this.getTotalPrice()
  },

  selectAll() {
    let carts = this.data.carts
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    carts.forEach((item, index) => {
      item.selected = selectAllStatus
    })
    this.setData({
      carts,
      selectAllStatus
    })
    this.getTotalPrice()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    setTimeout(() => {
      this.setData({
        carts: [
          {
            id: 1,
            title: 'iphone MX',
            image: '/image/s5.png',
            num: 1,
            price: 867,
            selected: true
          },
          {
            id: 2,
            title: 'ipad',
            image: '/image/s6.png',
            num: 1,
            price: 450,
            selected: true
          },
          {
            id: 3,
            title: '刀',
            image: '/image/s4.png',
            num: 1,
            price: 4,
            selected: false
          }
        ]
      })
      this.getTotalPrice()
    }, 1000)
  }
})