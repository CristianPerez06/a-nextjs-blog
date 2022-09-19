import React, { useState } from 'react'
import { useGetPosts } from '../hooks/useGetPosts'
import Layout from './Layout'
import PreviewCard from './PreviewCard'

import styles from './PreviewList.module.scss'
import Loading from './shared/Loading/Loading'
import { Pagination } from './shared/pagination/Pagination'

const ITEMS_PER_PAGE = 10
const URL = `/post?limit=${ITEMS_PER_PAGE}&page=`

const PreviewList = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { isLoading, error, response } = useGetPosts(URL + currentPage)

  const calcLastPage = (totalItems: number, itemsPerPage: number) => {
    const lastPage = Math.round(totalItems / itemsPerPage)
    return lastPage
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Layout>
      <div className={styles.container}>
        {error && <div>Oops... Something went wrong</div>}
        {!error && response && (
          <>
            <div className={styles.list}>
              {isLoading && <Loading />}
              {response && response.data.map((post) => <PreviewCard postPreview={post} key={post.id} />)}
            </div>
            <Pagination
              selectedPage={currentPage}
              pageCount={calcLastPage(response.total, ITEMS_PER_PAGE)}
              onChange={handlePageChange}
              isDisabled={isLoading}
            />
          </>
        )}
      </div>
    </Layout>
  )
}

export default PreviewList
