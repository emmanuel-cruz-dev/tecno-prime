import { useQuery } from '@tanstack/vue-query'
import { productsService } from '@/api/services/products'

export function useProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await productsService.getAllProducts()
      return response.payload
    },
  })

  return {
    products,
    isLoading,
    error,
  }
}
