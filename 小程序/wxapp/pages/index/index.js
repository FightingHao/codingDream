const app = getApp()

Page({
  // 数据
  data: {
    slides: [{
      "id": 5,
      "header": "全新一代发现",
      "sub_header": "Discovery",
      "description": "全尺寸七座 SUV，现已接受预订。",
      "image": "https://resources.ninghao.net/landrover/discover-1.jpg"
    },
    {
      "id": 3,
      "header": "全新揽胜星脉",
      "sub_header": "Range Rover",
      "description": "标新立异的前卫揽胜。",
      "image": "https://resources.ninghao.net/landrover/velar-1.jpg"
    },
    {
      "id": 6,
      "header": "发现神行",
      "sub_header": "Discovery",
      "description": "发现的绝佳时刻。",
      "image": "https://resources.ninghao.net/landrover/discovery-sport-1.jpg"
    }
    ],
    entities: [{
      "id": 1,
      "header": "揽胜",
      "sub_header": "Range Rover",
      "description": "世界顶级奢华 SUV 的极致巅峰。",
      "image": "https://resources.ninghao.net/landrover/range-rover-small.jpg",
      "meta": {
        "price": "RMB 1,588,000 起",
        "carbon_dioxide": 262,
        "fuel": 10.7,
        "exterior_design": [{
          "header": "闻名遐迩的设计",
          "description": "车身下部特征造型的三条经典线条、飘逸的车顶线和延续的腰线赋予揽胜极高的辨识度。独具特色的侧影略呈锥形，线条更为利落，亮光黑色支柱让车顶格外引人注目。",
          "image": "https://resources.ninghao.net/landrover/range-rover-ext-1.jpg"
        },
        {
          "header": "巅峰创世加长版外观",
          "description": "每种定制方案都透露着优雅和对细节的关注。独特的前格栅以及带深色滚花外观和光亮镀铬边缘的 “Range Rover” 前后字标等奢华的设计理念充分展示了对细节的不懈追求。",
          "image": "https://resources.ninghao.net/landrover/range-rover-ext-2.jpg"
        }
        ],
        "interior_design": [{
          "header": "装饰精美",
          "description": "车辆的内饰可带来宁静而奢华的舒适感。内饰奢华，精心打造；宽阔的中控台让基本控制按钮伸手可及。由精美真皮和甄选实木装饰的表面干净、雅致，帮助打造具有现代感的舒适氛围。",
          "image": "https://resources.ninghao.net/landrover/range-rover-int-1.jpg"
        },
        {
          "header": "巅峰创世加长版内饰",
          "description": "从后排中央扶手含高级冷藏箱和伸缩桌的后中央控制台，到带小腿支托的独特座椅设计，此车处处彰显自信高雅，散发出宁静、泰然的感觉。",
          "image": "https://resources.ninghao.net/landrover/range-rover-int-2.jpg"
        }
        ]
      }
    },
    {
      "id": 2,
      "header": "揽胜运动",
      "sub_header": "Range Rover Sport",
      "description": "越界动能，运动型豪华 SUV 的至高典范。",
      "image": "https://resources.ninghao.net/landrover/ranger-rover-sport-small.jpg",
      "meta": {
        "price": "RMB 928,000 起",
        "carbon_dioxide": 262,
        "fuel": 10.7,
        "exterior_design": [{
          "header": "优异性能",
          "description": "全铝合金车身结构不仅可以降低车重，更可增加灵活性，并有助于提高车辆安全性。揽胜运动版被设计为路虎迄今反应速度最快、最动感和最敏捷的车型。",
          "image": "https://resources.ninghao.net/landrover/range-rover-sport-ext-1.jpg"
        },
        {
          "header": "为震撼而生",
          "description": "均衡的比例、彰显力量的形象、简洁洗练的线条和精心雕刻的角度，所有这一切让这款车型变得卓而不凡、引人注目。",
          "image": "https://resources.ninghao.net/landrover/range-rover-sport-ext-2.jpg"
        }
        ],
        "interior_design": [{
          "header": "为您而设计",
          "description": "驾驶舱和控制布局经过精心设计和简化，为您提供易于集中精力和近乎直觉的驾驶体验。揽胜运动版指挥官式驾驶座椅让您对前方道路一目了然，从而提升自信感和控制感，增强驾驶体验。",
          "image": "https://resources.ninghao.net/landrover/range-rover-sport-int-1.jpg"
        },
        {
          "header": "现代内饰",
          "description": "富有现代气息的精致内饰彰显路虎揽胜运动版的运动气质。有力的线条、干净利落的表面和巧妙的细节处理，与柔和的饰面和精致的材质完美融合。整个空间既舒适又富有功能实用性。",
          "image": "https://resources.ninghao.net/landrover/range-rover-sport-int-2.jpg"
        }
        ]
      }
    }
    ]

  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
    console.log(app.globalData)
  },
  testDrive() {
    console.log('driver')
  },
  readMore(event) {
    console.log(event)
    wx.navigateTo({
      // 小程序js API
      url: `/pages/vehicles/show?id=${event.target.dataset.id}`
    })
  }
})