export const loadImage = (url: string | string[]) => {
  if (!Array.isArray(url)) {
    return loadOneImage(url)
  }
  const loaders = url.map(url => loadOneImage(url))
  return Promise.all(loaders)
}
export const loadOneImage = (url) => {
  // 函数
  return new Promise((resolve: (value: egret.Bitmap) => void, reject) => {
    const onImageLoaded = (e: egret.Event) => {
      const imageLoader: egret.ImageLoader = e.currentTarget
      const bitmapData: egret.BitmapData = imageLoader.data
      const texture = new egret.Texture()
      texture._setBitmapData(bitmapData)
      const bitmap = new egret.Bitmap(texture)
      resolve(bitmap)
    }
    const imageLoader = new egret.ImageLoader()
    imageLoader.once(egret.Event.COMPLETE, onImageLoaded, this)
    imageLoader.load(url)
  })
}