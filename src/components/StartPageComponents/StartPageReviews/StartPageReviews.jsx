import { useEffect } from "react";
import { Box, Comment, Name, NextArrowButton, PrevArrowButton, Rate, SVG, Section, Title, UserBox } from "./StartPageReviews.styled";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "redux/reviews/reviewsOperations";
import { selectReviews } from "redux/selectors";
import sprite from '../../../images/svg/sprite.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Avatar from '@mui/material/Avatar';

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <PrevArrowButton onClick={onClick}>
        <SVG width="50" height="50">
          <use href={`${sprite}#arrow-prev`} />
        </SVG>
      </PrevArrowButton>
    );
  };

  function randomRate() {
    const number = Math.random()*100;
    if (number > 50) {
        return 4;
    } else {
        return 5;
    }
  }


  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <NextArrowButton onClick={onClick}>
        <SVG width="50" height="50">
          <use href={`${sprite}#arrow-next`} />
        </SVG>
      </NextArrowButton>
    );
  }

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
                    const rate = randomRate();
                    return <div key={_id}>
                        <Box>
                            <UserBox>
                                <Avatar alt={`Avatar ${name}`}>{name[0].toUpperCase()}</Avatar>
                                <div>
                                    <Name>{name}</Name>
                                    <Rate>
                                        <svg width="14" height="14" fill="#FFAC33">
                                            <use href={`${sprite}#star`} />
                                        </svg>
                                        <svg width="14" height="14" fill="#FFAC33">
                                            <use href={`${sprite}#star`} />
                                        </svg>
                                        <svg width="14" height="14" fill="#FFAC33">
                                            <use href={`${sprite}#star`} />
                                        </svg>
                                        <svg width="14" height="14" fill='#FFAC33'>
                                            <use href={`${sprite}#star`} />
                                        </svg>
                                        <svg width="14" height="14" fill={rate === 5 ? '#FFAC33' : '#CEC9C1'}>
                                            <use href={`${sprite}#star`} />
                                        </svg>
                                    </Rate>
                                </div>
                            </UserBox>
                            <Comment>{comment}</Comment>
                        </Box>
                    </div>
                })}
              </Slider>
            </div>
        }
    </Section>
}