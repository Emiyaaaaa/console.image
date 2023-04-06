declare global {
  interface Console {
    image(url: string, params: { width?: number }): void
  }
}

async function image2Base64(src: string) {
  const image = new Image()
  image.crossOrigin = 'anonymous'
  image.src = src

  await new Promise((resolve, reject) => {
    image.onload = resolve
    image.onerror = reject
  })

  const canvas = document.createElement('canvas')

  canvas.width = image.width
  canvas.height = image.height
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.drawImage(image, 0, 0)
    return {
      base64Src: canvas.toDataURL('image/png'),
      width: image.width,
      height: image.height,
    }
  } else {
    throw new Error('Canvas context is null')
  }
}

async function consoleImage(url: string, params?: { width?: number }) {
  const imageInfo = await image2Base64(url)

  if (typeof params?.width === 'number') {
    const ratio = imageInfo.width / imageInfo.height
    const width = params.width
    const height = width * ratio
    imageInfo.width = width
    imageInfo.height = height
  }

  const style = [
    `padding:${imageInfo.height}px ${imageInfo.width}px`,
    `background:url(${imageInfo.base64Src})`,
    'background-repeat:no-repeat',
    'background-size:contain',
  ].join(';')

  console.log('%c ', style)
}

console.image = consoleImage

export default consoleImage
