// apiService.js
const API_BASE_URL = 'http://localhost:8080';

const apiService = {
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);

      return true;
    } catch (error) {
      console.error('Error during login:', error);
      return false; 
    }
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  getUserData: async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token not found');
    }

    try {
      const response = await fetch(`${API_BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      return await response.json();
    } catch (error) {
      console.error('Error during fetching user data:', error);
      throw error;
    }
  },
};

export default apiService;
