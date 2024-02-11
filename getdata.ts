import { RequestInfo } from 'node-fetch';

// Import node-fetch 
import('node-fetch').then(({ default: fetch }) => {
  // An asynchronous function 
  async function fetchData(url: RequestInfo) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // Throw an error for non-200 status codes
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response; // Return the raw response
    } catch (error) {
      console.error('Error fetching data:', error); // error 
      throw error; 
    }
  }

  async function displayData() {
    const apiUrl1 = 'https://strobelightprojects.github.io/wdd130/atlantis/index.html';
    const apiUrl2 = 'https://example.com/another-page.html'; 

    try {
      // first URL fetch
      const response1 = await fetchData(apiUrl1);
      if (response1.ok) {
        const data1 = await response1.text();
        console.log('Fetched data from first URL:', data1);
      } else {
        console.log('Failed to fetch data from first URL:', response1.status);
      }

      // second URL fetch
      const response2 = await fetchData(apiUrl2);
      if (response2.ok) {
        const data2 = await response2.text();
        console.log('Fetched data from second URL:', data2);
      } else {
        console.log('Failed to fetch data from second URL:', response2.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Run the example
  displayData();
}).catch((error) => {
  console.error('Error loading node-fetch:', error);
});