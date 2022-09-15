import { UserPreview } from './UserPreview'

export type PostPreview = {
  id: string
  text: string
  image: string
  likes: number
  tags: string[]
  publishDate: string
  owner: UserPreview
}
