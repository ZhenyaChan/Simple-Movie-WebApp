import React from 'react';
import {FaWindowClose} from "react-icons/fa";

const MovieItem = (props) => {

    const clickHandler = () => props.onDeleteMovie(props.id);

    return (
        <div className="movie-container">

            <div className="grid grid-col-2 movie-top-area">
                <p className="">
                    {props.title}
                </p>
                <FaWindowClose onClick = {clickHandler} className="icon-cursor icon-size-dbl-xlg grid-x-right"/>
            </div>

            <p className="movie-description">
                {props.description}
            </p>
        </div>
    );
};

MovieItem.defaultProps = {
    title: "Movie",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam inventore adipisci, ullam nemo asperiores cupiditate illum, dicta ea quisquam, nisi et error impedit quaerat laudantium autem alias numquam. Ipsum"
}


export default MovieItem;
