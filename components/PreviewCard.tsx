import React from 'react'
import Image from 'next/image'
import { PostPreview } from '../types/PostPreview'

import styles from './PreviewCard.module.scss'
import imageLoader from '../utils/imageLoader'
import Link from 'next/link'

interface PreviewCardProps {
  postPreview: PostPreview
}

type Comp = (post: PreviewCardProps) => JSX.Element

const PreviewCard: Comp = (props) => {
  const { postPreview } = props
  const { image, text, tags } = postPreview

  const tagsList = tags.slice(0, 3).join(', ')

  return (
    <Link href={`/post/${postPreview.id}/detail`}>
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
    </Link>
  )
}

export default PreviewCard
