export const fetchCategories = async () => {
  
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiURL}/api/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
