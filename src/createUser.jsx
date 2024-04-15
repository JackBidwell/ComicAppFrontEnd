import axios from 'axios';

// Define the function that will create a user
export function createUser(userData) {
  // Axios POST request to create a new user
  return axios.post('http://localhost:5173/users', userData)
    .then(response => {

      console.log('User created successfully:', response.data);
      return response.data;
    })
    .catch(error => {

      console.error('Error creating user:', error);
      throw error;
    });
}
