export const fetchCategories = async () => {
    const response = await fetch("http://localhost:5000/api/categories");
  
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return response.json();
  };

