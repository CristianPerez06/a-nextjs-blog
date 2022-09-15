import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import DetailCard from '../../../components/DetailCard'

const Detail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const postId = id as string

  return <div className={'container'}>{id && <DetailCard id={postId} />}</div>
}

export default Detail
