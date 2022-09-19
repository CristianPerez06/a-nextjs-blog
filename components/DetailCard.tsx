import React from 'react'
import Image from 'next/image'
import { useGetPost } from '../hooks/useGetPost'
import imageLoader from '../utils/imageLoader'

import styles from './DetailCard.module.scss'
import Layout from './Layout'
import Loading from './shared/Loading/Loading'
import Link from 'next/link'
import { ThumbUpIcon } from '@heroicons/react/outline'

const URL = '/post/'

interface DetailCardProps {
  id: string
}

type Comp = (post: DetailCardProps) => JSX.Element

const DetailCard: Comp = (props) => {
  const { id } = props
  const { isLoading, error, response } = useGetPost(URL + id)

  return (
    <Layout>
      <div className={styles.container}>
        <Link href={'/'}>
          <a className={styles.goBack}>Go to list</a>
        </Link>
        {isLoading && <Loading />}
        {!isLoading && error && <div>Oops... Something went wrong</div>}
        {response && (
          <div className={styles.cardContainer}>
            <div className={styles.left}>
              <div className={styles.imageContainer}>
                <Image src={response.image} className={styles.image} width={350} height={350} loader={imageLoader} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightContent}>
                <span className={styles.title}>{response.text}</span>
                {response.owner && (
                  <div className={styles.ownerContainer}>
                    <span className={styles.innerTitle}>Owner: </span>
                    <span className={styles.text}>{`${response.owner.firstName} ${response.owner.lastName}`}</span>
                  </div>
                )}
                {response.likes && (
                  <div className={styles.likesContainer}>
                    <span className={styles.text}>{response.likes}</span>
                    <ThumbUpIcon width="20" height="20" color={'#2196f3'} className={styles.icon} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default DetailCard
