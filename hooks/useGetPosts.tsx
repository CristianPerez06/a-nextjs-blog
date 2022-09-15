import { useState, useEffect } from 'react'
import { PostPreview } from '../types/PostPreview'

type Response = {
  data: PostPreview[]
  total: number
  page: number
  limit: number
}

export type TApiResponse = {
  response: Response | undefined
  error: string | undefined
  isLoading: boolean
}

export const useGetPosts = (url: string): TApiResponse => {
  const [response, setResponse] = useState<Response>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getData = async () => {
    setIsLoading(true)
    try {
      const apiResponse = await fetch(process.env.NEXT_PUBLIC_API + url, {
        method: 'GET',
        headers: { 'app-id': process.env.NEXT_PUBLIC_APP_ID || '' },
      })
      const json = await apiResponse.json()
      setResponse(json)
    } catch (error) {
      setError(error as string)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return { response, error, isLoading }
}
