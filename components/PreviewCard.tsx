import React from 'react'
import { PostPreview } from '../types/PostPreview'

interface PreviewCardProps {
  postPreview: PostPreview
}

type Comp = (post: PreviewCardProps) => JSX.Element

const PreviewCard: Comp = (props) => {
  const { postPreview } = props
  const { text } = postPreview

  return <div>{text}</div>
}

export default PreviewCard
