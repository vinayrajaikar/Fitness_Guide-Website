// Exercise  GIF Rapid Api
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '02d665059bmsh7db8552860ff267p1a9386jsn53c48c6d4f15',
    },
  };

// YT-Exercise Rapid Api
export const YoutubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '02d665059bmsh7db8552860ff267p1a9386jsn53c48c6d4f15',
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




  


  

