import React, { Fragment, useEffect, useRef, useState } from 'react'
import "./Rating.scss"

const Rating = ({ rating, totalStars, className }) => {
    const [numberOfStars, setNumberOfStars] = useState();
    const ratingRef = useRef();

    useEffect(() => {
        setNumberOfStars([...Array(totalStars).keys()].map((i) => i + 1));
        let percentage;
        if (rating <= 5) {
            percentage = (rating / 5) * 100;
        } else {
            percentage = (rating / 10) * 100;
        }
        const startPercentage = `${Math.floor(percentage)}%`;
        ratingRef.current.style.width = startPercentage;
    }, [rating, totalStars]);

    return (
        <div className="star-rating">
            <div className={`back-stars ${className}`}>
                {numberOfStars &&
                    numberOfStars.map((i) => (
                        <Fragment key={i}>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </Fragment>
                    ))}

                <div className={`front-stars ${className}`} ref={ratingRef}>
                    {numberOfStars &&
                        numberOfStars.map((i) => (
                            <Fragment key={i}>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </Fragment>
                        ))}
                </div>
            </div>
        </div>
    );
};
export default Rating
