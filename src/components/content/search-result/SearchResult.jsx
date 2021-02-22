import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IMAGE_URL } from '../../../services/movie.service'
import LazyImage from '../../lazy-image/LazyImage'
import Rating from '../rating/Rating'
import '../grid/Grid.scss';
import './SearchResult.scss';
import { Link } from 'react-router-dom'

function SearchResult({ searchResult, searchQuery }) {
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        setMovieData(searchResult);
    }, [searchResult]);

    const formatMovieTitle = title => {
        const titleStr = title.toLowerCase();
        return titleStr.replace(/ /g, '-')
    }
    return (
        <div className="searchKeyword">
            <div className="grid-search-title">
                <span className="grid-text1">Your search keyword: </span> {' '}
                <span className="grid-text2">{searchQuery} </span>
            </div>
            <div className="grid">
                {movieData.map((data) => (
                    <Fragment key={data.title}>
                        {
                            data.poster_path && <LazyImage className="grid-cell" src={`${IMAGE_URL}${data.poster_path}`} alt="placeholder">
                                <div className="grid-read-more">
                                    <button className="grid-cell-button">
                                        <Link to={`/${data.id}/${formatMovieTitle(data.title)}/details`}>Read More</Link>
                                    </button>
                                </div>
                                <div className="grid-detail">
                                    <span className="grid-detail-title">{data.title}</span>
                                    <div className="grid-detail-rating">
                                        <Rating rating={data.vote_average} totalStars={10} />
                                    &nbsp;&nbsp;
                                    <div className="grid-vote-average">{data.vote_average}</div>
                                    </div>
                                </div>
                            </LazyImage>}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    searchResult: state.movies.searchResult,
    searchQuery: state.movies.searchQuery
})
export default connect(mapStateToProps, {})(SearchResult)
