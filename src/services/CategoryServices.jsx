import fateenAPI from "../config/api"

export async function getCategories() {
  const response = await fateenAPI.get('/api/categories')
  return response.data;
  
}
