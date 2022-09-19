import { ImageLoaderProps } from 'next/image'

const imageLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}?width=${width}`
}

export default imageLoader
