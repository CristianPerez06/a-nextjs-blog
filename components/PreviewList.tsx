import React from 'react'
import { useGetPosts } from '../hooks/useGetPosts'
import Layout from './Layout'
import PreviewCard from './PreviewCard'

import styles from './PreviewList.module.scss'

const URL = '/post?limit=10'

const PreviewList = () => {
  const { isLoading, error, response } = useGetPosts(URL)

  return (
    <Layout>
      {isLoading && <div>Loading...</div>}
      {error && <div>Oops... Something went wrong</div>}
      {response && (
        <div className={styles.listContainer}>
          {response.data.map((post) => (
            <PreviewCard postPreview={post} key={post.id} />
          ))}
        </div>
      )}
    </Layout>
  )
}

export default PreviewList
