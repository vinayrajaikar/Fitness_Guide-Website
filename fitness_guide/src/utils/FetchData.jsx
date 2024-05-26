// src/utils/FetchData.jsx
// console.log('API Key:', process.env.REACT_APP_RAPID_API_KEY);

// export const exerciseOptions = {
//     method: 'GET',
//     // params: { limit: '10' },
//     headers: { 
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       'X-RapidAPI-Key':'f5034ac93bmsh539a89da0404dd9p1dd196jsn77aadb8b348a'
//     }
//   };
  
//   export const fetchData = async (url, options) => {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data;
//   };


// export const exerciseOptions=async()=>{
//     const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'f5034ac93bmsh539a89da0404dd9p1dd196jsn77aadb8b348a',
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }

// }



// utils/FetchData.js
// export const exerciseOptions = () => ({
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   });
  
//   export const fetchData = async (url, options) => {
//     try {
//       const response = await fetch(url, options);
//       const data = await response.json(); // Assuming the response is JSON
//       return data;
//     } catch (error) {
//       console.error(error);
//       throw error; // Re-throw the error for further handling if needed
//     }
//   };
  

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'f5034ac93bmsh539a89da0404dd9p1dd196jsn77aadb8b348a',
    },
  };

  export const fetchData = async (url, options) => {
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  };

  


  

