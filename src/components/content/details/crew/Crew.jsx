import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IMAGE_URL } from '../../../../services/movie.service';

import './Crew.scss';

const Crew = ({ movie }) => {
    const [credits] = useState(movie[1])
    return (
        <>
            <div className="cast">
                <div className="div-title">Crew</div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th className="head">Department</th>
                            <th className="head">Job</th>
                        </tr>
                    </thead>

                    {credits.crew.map((data) => (
                        <tbody key={data.name}>
                            <tr>
                                <td>
                                    <img src={data.profile_path ? `${IMAGE_URL}${data.profile_path}` : 'http://placehold.it/54x81'} alt="" />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.department}</td>
                                <td>{data.job}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    movie: state.movies.movie
});

export default connect(mapStateToProps)(Crew);