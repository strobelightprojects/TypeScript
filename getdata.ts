import fetch, { Response } from 'node-fetch';

// An asynchronous function to fetch data from a specified URL
export async function fetchData(url: string): Promise<Response> {
  try {
    const response = await fetch(url); // Perform HTTP request
    if (!response.ok) {
      // Throw an error for non-200 status codes
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response; // Return the raw response
  } catch (error) {
    console.error('Error fetching data:', error); // Log error message
    throw error; // Rethrow the error
  }
}

// Example usage of fetchData function
async function displayData(): Promise<void> {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  const response = await fetchData(apiUrl);
  if (response.ok) {
    const data = await response.text(); // Read response body as text
    console.log('Fetched data:', data);
  } else {
    console.log('Failed to fetch data:', response.status);
  }
}

// Run the example
displayData();
