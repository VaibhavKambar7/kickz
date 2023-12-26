// import axios, { AxiosResponse } from "axios";

interface SizeData {
  size: string;
  enabled: boolean;
}

export interface FrontendProduct {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  size: SizeData[];
  images: string[];
  thumbnail: string;
  original_price: number;
  slug: string;
  categories: FrontendCategory[];
}

export interface FrontendCategory {
  id: number;
  name: string;
  slug: string;
  products : FrontendProduct[];

}

// const transformBackendData = (backendData: any[]): FrontendProduct[] => {
//   return backendData.map((product) => ({
//     id: product.id,
//     name: product.name,
//     subtitle: product.subtitle,
//     original_price: product.original_price,
//     price: product.price,
//     description: product.description,
//     size: product.size.data,
//     images: product.images,
//     thumbnail: product.thumbnail,
//     originalPrice: product.original_price,
//     slug: product.slug,
//     categories: product.categories.map((category: FrontendCategory) => ({
//       id: category.id,
//       name: category.name,
//       slug: category.slug,
//     })),
//   }));
// };

// const fetchDataFromApi = async (): Promise<FrontendProduct[]> => {
//   try {
//     const response: AxiosResponse<any[]> = await axios.get(
//       "http://localhost:5000/api/products"
//     );

//     if (!response.data || response.data.length === 0) {
//       throw new Error("No products fetched from backend");
//     }

//     const frontendProducts: FrontendProduct[] = transformBackendData(
//       response.data
//     );

//     console.log(frontendProducts);

//     return frontendProducts;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };

// export default fetchDataFromApi;
