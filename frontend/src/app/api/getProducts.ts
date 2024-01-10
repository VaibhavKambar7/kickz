export default async function getProducts() {
    try {
      const response = await fetch(`http://localhost:5000/api/products`);
  
      const data = await response.json();
     // console.log(data)
  
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
  