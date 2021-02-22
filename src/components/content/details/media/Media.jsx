import React from 'react';
import { connect } from 'react-redux';
import { IMAGE_URL } from '../../../../services/movie.service';

import './Media.scss';

const Media = ({ movie }) => {
    return (
        <>
            <div className="media">
                <div>
                    <div className="media-title">Watch Trailer</div>
                    <div className="media-videos">
                        {
                            movie[3].results.map(data => (
                                <div className="video" key={data.key}>
                                    <iframe
                                        title="nana"
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        src={`https://www.youtube.com/embed/${data.key}`}
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div>
                    <div className="media-title">Photos ({movie[2].posters.length})</div>
                    <div className="media-images">
                        {
                            movie[2].posters.map(data =>
                                <div key={data.file_path}
                                    className="image-cell"
                                    style={{
                                        backgroundImage: `url(${IMAGE_URL}${data.file_path})`
                                    }}
                                ></div>)
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    movie: state.movies.movie
});

export default connect(mapStateToProps)(Media);