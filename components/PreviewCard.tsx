import React from 'react'
import Image from 'next/image'
import { ImageLoaderProps } from 'next/image'
import { PostPreview } from '../types/PostPreview'

import styles from './PreviewCard.module.scss'

const imageLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}?width=${width}`
}

interface PreviewCardProps {
  postPreview: PostPreview
}

type Comp = (post: PreviewCardProps) => JSX.Element

const PreviewCard: Comp = (props) => {
  const { postPreview } = props
  const { image, text, tags } = postPreview

  const tagsList = tags.slice(0, 3).join(', ')

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image src={image} className={styles.image} width={150} height={150} loader={imageLoader} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <span className={styles.title}>{text}</span>
          <span className={styles.tags}>{tagsList}</span>
        </div>
      </div>
    </div>
  )
}

export default PreviewCard
