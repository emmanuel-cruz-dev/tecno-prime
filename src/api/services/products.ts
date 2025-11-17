import apiClient from '@/api/client'

const getAllProducts = async () => {
  const { data } = await apiClient.get('/products')
  return data
}

export const productsService = {
  getAllProducts,
}
