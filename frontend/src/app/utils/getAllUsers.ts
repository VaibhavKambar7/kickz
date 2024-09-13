export const getAllUsers = async () => {

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiURL}/api/user/allUsers`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};
