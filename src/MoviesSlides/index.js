import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const MoviesSlides=props=>{
    const settings = {
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 4,
      }

    const {moviesList} = props 

    return(
        <>
            <Slider {...settings}>
            {moviesList.map(eachMovies=>(
                <MovieItem key={eachMovies.id} movieDetails={eachMovies}/>
            ))}
            </Slider>
        </>
    )
}
export default MoviesSlides