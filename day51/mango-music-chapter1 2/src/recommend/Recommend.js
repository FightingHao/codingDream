import React, { Component } from 'react'
import './recommend.styl'
// @指向src目录
import { getCarousel, getNewAlbum } from '@/api/recommend'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { CODE_SUCCESS } from '../api/config'
import * as AlbumModel from '@/model/album'
import Loading from '@/common/loading/loading'
import LazyLoad, { forceCheck } from 'react-lazyload'

export default class Recommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderList: [],
      newAlbums: [],
      loading: true
    }
  }

  componentDidMount() {
    getCarousel()
      .then(res => {
        console.log(res)
        if (res.code === CODE_SUCCESS) {
          this.setState({
            sliderList: res.data.slider
          }, () => {
            if (!this.sliderSwiper) {
              this.sliderSwiper = new Swiper('.slider-container', {
                loop: true,
                autoplay: 3000,
                pagination: {
                  el: '.swiper-pagination'
                }
              })
            }
          })
        }
      })

    // 获取最新专辑
    getNewAlbum()
      .then(res => {
        console.log(res)
        if (res) {
          if (res.code === CODE_SUCCESS) {
            let albumList = res.albumlib.data.list
            this.setState({
              newAlbums: albumList,
              loading: false
            }, () => {
              // 热更新
              // setState 数据值 同步更新
              // 组件有哪些部分(专辑列表)改变了 对应的UI节点 replace 生成新的DOM节点
              console.log('页面专辑列表这动态更新了')
            })
          }
        }
      })
  }

  render() {
    let albums = this.state.newAlbums.map(item => {
      let album = AlbumModel.createAlbumByList(item)
      return (
        <div className="album-wrapper" key={album.id}>
          <div className="left">
            {/* 不影响DOM文档流构建 */}
            <LazyLoad height={60}>
              <img src={album.img} width="100%" height="100%" alt={album.name} />
            </LazyLoad>
          </div>
          <div className="right">
            <div className="album-name">{album.name}</div>
            <div className="singer-name">{album.singer}</div>
            <div className="public-time">{album.publicTime}</div>
          </div>
        </div>
      )
    })
    return (
      <div className="music-recommend">
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              this.state.sliderList.map(slider => {
                return (
                  <div className="swiper-slide" key={slider.id}>
                    <a href="#" className="slider-na">
                      <img src={slider.picUrl} alt="推荐" width="100%" height="100%" />
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="album-container">
          <h1 className="title">最新专辑</h1>
          <div className="album-list">
            {albums}
          </div>
        </div>
        <Loading
          title="正在加载中..."
          show={this.state.loading}
        />
      </div>
    )
  }
}
