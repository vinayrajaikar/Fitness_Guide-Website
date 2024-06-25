// Exercise  GIF Rapid Api
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '806e140286msh0279857defdcf55p12226ajsn698db7ba1be8',
    },
  };

// YT-Exercise Rapid Api
export const YoutubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '806e140286msh0279857defdcf55p12226ajsn698db7ba1be8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
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




  


  

