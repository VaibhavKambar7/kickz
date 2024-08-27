export default async function getProducts() {

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiURL}/api/products`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
