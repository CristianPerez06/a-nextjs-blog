import { useState, useEffect } from 'react'
import { PostDetail } from '../types/PostDetail'

type Response = PostDetail

export type TApiResponse = {
  response: Response | undefined
  error: string | undefined
  isLoading: boolean
}

export const useGetPost = (url: string): TApiResponse => {
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
