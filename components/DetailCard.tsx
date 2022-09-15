import React from 'react'
import { useGetPost } from '../hooks/useGetPost'

const URL = '/post/'

interface DetailCardProps {
  id: string
}

type Comp = (post: DetailCardProps) => JSX.Element

const DetailCard: Comp = (props) => {
  const { id } = props
  const { isLoading, error, response } = useGetPost(URL + id)

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Oops... Something went wrong</div>}
      {response && <div>{response.text}</div>}
    </div>
  )
}

export default DetailCard
