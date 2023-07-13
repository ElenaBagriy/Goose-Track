import { useEffect } from "react";
import { Box, Comment, Name, Section, Title } from "./StartPageReviews.styled";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "redux/reviews/reviewsOperations";
import { selectReviews } from "redux/selectors";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
    ],
  };

export const StartPageReviews = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(selectReviews);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    return <Section>
        {reviews && <div>
              <Title>REVIEWS</Title>
              <Slider {...settings}>
                {reviews.map(({_id, name, comment}) => {
                    return <div key={_id}>
                        <Box>
                            <div>
                                <div>PHOTO</div>
                                <Name>{name}</Name>
                                <div>Rate</div>
                            </div>
                            <Comment>{comment}</Comment>
                        </Box>
                    </div>
                })}
              </Slider>
            </div>
        }
    </Section>
}