import { useState, useEffect } from 'react'; 
//components
import Header from'../components/common/Header';

import { Box, Typography, styled , Divider} from '@mui/material';
import Carousel from 'react-multi-carousel';


import { getCategoryMovies } from '../services/api';

import { useLocation } from 'react-router-dom';

import { POPULAR_API_URL, UPCOMING_API_URL, TOPRATED_API_URL, moviesType } from '../constants/constant';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Component = styled(Box)`
   width:80%;
   margin: auto;
  `

  const StyledBanner = styled('img')({
     height: 450,
     width: '100%'
  })

  const CategoryMovies = ({API_URL}) => {
    
    const [movies, setMovies] = useState([]);

    const { search } = useLocation();
    
    useEffect(() => {
        const getData = async (API_URL) => {
            let response = await getCategoryMovies(API_URL);
            setMovies(response.results);
        }

        let API_URL = '';

        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes('upcoming')) {
            API_URL = UPCOMING_API_URL;
        } else if (search.includes('toprated')) {
            API_URL = TOPRATED_API_URL;
        }

        getData(API_URL);
    }, [search])

    return (
        <>
        <Header />
        <Component>
        <Carousel
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        slidesToSlide={1}
        responsive={responsive}
      >
        {movies.map((movie) => (
            <>
          <StyledBanner
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="banner"
          />
         

          </>
        ))}
      </Carousel>
      <Box>
        <Typography> IMDb Charts</Typography>
        <Typography>IMDB {moviesType[search.split('=')[1]]} Movies</Typography>
        <Typography>IMDb Top {movies.length} as rated by regular IMBb voters. </Typography>

        <Divider />
      </Box>
        </Component>
        
        </>
    )
}



export default CategoryMovies;