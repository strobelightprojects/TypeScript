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
    const apiUrl2 = 'https://strobelightprojects.github.io/wdd130/atlantis/eye.html'; 
    const apiUrl3 = 'https://strobelightprojects.github.io/wdd130/atlantis/cyprus.html'; 
    const apiUrl4 = 'https://strobelightprojects.github.io/wdd130/atlantis/contact.html';
    const apiUrl5 = 'https://strobelightprojects.github.io/wdd130/wwr/'; 
    const apiUrl6 = 'https://strobelightprojects.github.io/wdd130/wwr/faq.html'; 

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

      // third URL fetch
      const response3 = await fetchData(apiUrl3); // fetching third website
      if (response3.ok) {
        const data3 = await response3.text();
        console.log('Fetched data from third URL:', data3); //success
      } else {
        console.log('Failed to fetch data from third URL:', response3.status); //failed 
      }

      // fourth URL fetch
      const response4 = await fetchData(apiUrl4); // fetching fourth website
      if (response4.ok) {
        const data4 = await response4.text();
        console.log('Fetched data from fourth URL:', data4); //success
      } else {
        console.log('Failed to fetch data from fourth URL:', response4.status); //failed 
      }
      //5 
      const response5 = await fetchData(apiUrl5); // fetching fourth website
      if (response5.ok) {
        const data5 = await response5.text();
        console.log('Fetched data from fourth URL:', data5); //success
      } else {
        console.log('Failed to fetch data from fourth URL:', response5.status); //failed 
      }
      //6
      const response6 = await fetchData(apiUrl6); // fetching fourth website
      if (response6.ok) {
        const data6 = await response6.text();
        console.log('Fetched data from fourth URL:', data6); //success
      } else {
        console.log('Failed to fetch data from fourth URL:', response6.status); //failed 
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
  