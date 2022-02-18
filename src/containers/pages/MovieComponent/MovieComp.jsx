import React, { Component, Fragment } from "react";
import MovieComp from "../../../components/MovieComp/MovieComp";
class MovieComponent extends Component{
    render(){
        return(
            <Fragment>
                <MovieComp
                    image="https://i.postimg.cc/3rmsKTvM/avanger-endgame.jpg"
                    title="Avangers End Game"
                    slogan="Marvel Studio"
                />
                <MovieComp
                    image="https://i.postimg.cc/xdFPDcRv/X-Men-Apocalypse.jpg"
                    title="X-Men Apocalypse"
                    slogan="Marvel Studio"
                />
                <MovieComp
                    image="https://i.postimg.cc/brrpBVmY/blade-runner2.jpg"
                    title="Blade Runner 2049"
                    slogan="Marvel Studio"
                />
            </Fragment>
        )
    }
}

export default MovieComponent;