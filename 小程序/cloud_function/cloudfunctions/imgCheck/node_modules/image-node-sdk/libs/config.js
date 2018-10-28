module.exports = {
    // 服务映射列表
    Services: {
        // 人脸融合
        'face-fuse': {
            url: 'https://aiconsole.cloud.tencent.com/fuseapi/face',
        },
        // 身份证信息认证
        'auth-idcard': {
            url: 'https://service.image.myqcloud.com/auth/idcard',
        },

        // 图片标签
        'image-tag-detect': {
            url: 'https://service.image.myqcloud.com/v1/detection/imagetag_detect',
        },

        // 图片鉴黄
        'image-porn-detect': {
            url: 'https://service.image.myqcloud.com/detection/porn_detect',
        },

        // 人脸识别-人脸检测与分析
        'face-detect': {
            url: 'https://recognition.image.myqcloud.com/face/detect'
        },

        // 人脸识别-五官定位
        'face-shape': {
            url: 'https://recognition.image.myqcloud.com/face/shape'
        },

        // 人脸识别-人脸对比
        'face-compare': {
            url: 'https://recognition.image.myqcloud.com/face/compare'
        },

        // 个体信息管理 - 个体创建
        'face-newperson': {
            url: 'https://recognition.image.myqcloud.com/face/newperson'
        },

        // 个体信息管理 - 删除个体
        'face-delperson': {
            url: 'https://recognition.image.myqcloud.com/face/delperson'
        },

        // 个体信息管理 - 增加人脸
        'face-addface': {
            url: 'https://recognition.image.myqcloud.com/face/addface'
        },

        // 个体信息管理 - 删除人脸
        'face-delface': {
            url: 'https://recognition.image.myqcloud.com/face/delface'
        },

        // 个体信息管理 - 设置信息
        'face-setinfo': {
            url: 'https://recognition.image.myqcloud.com/face/setinfo'
        },

        // 个体信息管理 - 获取信息
        'face-getinfo': {
            url: 'https://recognition.image.myqcloud.com/face/getinfo'
        },

        // 个体信息管理 - 获取组列表
        'face-getgroupids': {
            url: 'https://recognition.image.myqcloud.com/face/getgroupids'
        },

        // 个体信息管理 - 获取人列表
        'face-getpersonids': {
            url: 'https://recognition.image.myqcloud.com/face/getpersonids'
        },

        // 个体信息管理 - 获取人脸列表
        'face-getfaceids': {
            url: 'https://recognition.image.myqcloud.com/face/getfaceids'
        },

        // 个体信息管理 - 新增组信息
        'face-addgroupids': {
            url: 'https://recognition.image.myqcloud.com/face/addgroupids'
        },

        // 个体信息管理 - 删除组信息
        'face-delgroupids': {
            url: 'https://recognition.image.myqcloud.com/face/delgroupids'
        },

        // 人脸识别-多脸检索
        'face-multiple': {
            url: 'https://recognition.image.myqcloud.com/face/multidentify'
        },

        // 人脸识别-人脸验证
        'face-verify': {
            url: 'https://recognition.image.myqcloud.com/face/verify'
        },

        // 人脸识别-人脸检索
        'face-identify': {
            url: 'https://recognition.image.myqcloud.com/face/identify'
        },

        // 人脸核身-人脸静态活体检测
        'face-livedetectpicture': {
            url: 'https://recognition.image.myqcloud.com/face/livedetectpicture'
        },

        // 人脸核身-唇语活体检测视频身份信息核验
        'face-idcardlivedetectfour': {
            url: 'https://recognition.image.myqcloud.com/face/idcardlivedetectfour'
        },

        // 人脸核身-获取唇语验证码
        'face-livegetfour': {
            url: 'https://recognition.image.myqcloud.com/face/livegetfour'
        },

        // 人脸核身-活体检测视频与用户照片的对比
        'face-livedetectfour': {
            url: 'https://recognition.image.myqcloud.com/face/livedetectfour'
        },

        // 人脸核身-用户上传照片身份信息核验
        'face-idcardcompare': {
            url: 'https://recognition.image.myqcloud.com/face/idcardcompare'
        },

        // OCR-身份证识别
        'ocr-idcard': {
            url: 'https://recognition.image.myqcloud.com/ocr/idcard',
        },

        // OCR-名片识别
        'ocr-businesscard': {
            url: 'https://recognition.image.myqcloud.com/ocr/businesscard',
        },

        // OCR-手写体识别
        'ocr-handwriting': {
            url: 'https://recognition.image.myqcloud.com/ocr/handwriting',
        },

        // OCR-营业执照识别
        'ocr-bizlicense': {
            url: 'https://recognition.image.myqcloud.com/ocr/bizlicense',
        },

        // OCR-行驶证驾驶证
        'ocr-drivinglicence': {
            url: 'https://recognition.image.myqcloud.com/ocr/drivinglicence',
        },

        // OCR-车牌号识别
        'ocr-plate': {
            url: 'https://recognition.image.myqcloud.com/ocr/plate',
        },

        // OCR-通用印刷体识别
        'ocr-general': {
            url: 'https://recognition.image.myqcloud.com/ocr/general',
        },

        // OCR-银行卡识别
        'ocr-bankcard': {
            url: 'https://recognition.image.myqcloud.com/ocr/bankcard',
        },
    }
};
