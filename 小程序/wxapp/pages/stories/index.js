const app = getApp()

Page({
  data: {
    stories: [],
    currentVid: null,
    currentVideo: null
  },
  // 生命周期
  onLoad(options) {
    this.setData({
      stories: app.globalData.stories
    })
  },
  play(event) {
    const vid = event.target.dataset.vid
    // console.log(vid);
    const currentVideo = wx.createVideoContext(`${vid}`)



    this.setData({
      currentVideo: currentVideo,
      currentVid: vid
    }, () => {
      currentVideo.play()
    })
  }
});
