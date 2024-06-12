import React, { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, YoutubeOptions } from '../utils/FetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';
// import { UserContextData } from '../App'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  //  const {exerciseDetail, setExerciseDetail, exerciseVideos, setExerciseVideos}=useContext(UserContextData);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisedData = async () => {
      try {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        if (exerciseDetailData) {
          const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, YoutubeOptions);
          console.log(exerciseVideosData);
          setExerciseVideos(exerciseVideosData.contents);
        }
      } catch (error) {
        console.error('Failed to fetch exercise data:', error);
      }
    };

    fetchExercisedData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
