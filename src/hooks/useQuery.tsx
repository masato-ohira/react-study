import { useRouter } from 'next/router'

export const useQuery = () => {
  const router = useRouter()
  const page: number =
    router.isReady && isFinite(Number(router.query.page))
      ? Number(router.query.page)
      : 1
  return { page }
}
