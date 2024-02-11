import { RequestInfo } from 'node-fetch';

// Import node-fetch 
import('node-fetch').then(({ default: fetch }) => {
  // An asynchronous function 
  async function fetchData(url: RequestInfo) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // Throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response; // Return response
    } catch (error) {
      console.error('Error fetching data:', error); // error 
      throw error; 
    }
  }

  async function displayData() { //websites put into varriables 
    const apiUrl1 = 'https://strobelightprojects.github.io/wdd130/atlantis/index.html';
    const apiUrl2 = 'https://strobelightprojects.github.io/wdd130/wwr/site-plan-rafting.html'; 

    try {
      // first URL fetch
      const response1 = await fetchData(apiUrl1); //fetching first website
      if (response1.ok) {
        const data1 = await response1.text();
        console.log('Fetched data from first URL:', data1); // success 
      } else {
        console.log('Failed to fetch data from first URL:', response1.status); // failed 
      }

      // second URL fetch
      const response2 = await fetchData(apiUrl2); // fetching second website
      if (response2.ok) {
        const data2 = await response2.text();
        console.log('Fetched data from second URL:', data2); //succes
      } else {
        console.log('Failed to fetch data from second URL:', response2.status); //failed 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Run the program
  displayData();
}).catch((error) => {
  console.error('Error loading node-fetch:', error); //throwing and handling exceptions
});