import React from 'react'
import { useGetPosts } from '../hooks/useGetPosts'
import PreviewCard from './PreviewCard'

const URL = '/post?limit=10'

const PreviewList = () => {
  const { isLoading, error, response } = useGetPosts(URL)

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Oops... Something went wrong</div>}
      {response && (
        <div>
          {response.data.map((post) => (
            <PreviewCard postPreview={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PreviewList
