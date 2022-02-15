import React from "react";
import HeaderMovie from "../../components/MovieComp/HeaderMovie";
import MovieComp from '../../components/MovieComp/MovieComp';

// Satate Full Component 
class HomePage extends React.Component {
    render(){
        return (
            <div>
                <HeaderMovie/>
                <MovieComp 
                    title="Blade Runner 2049" 
                    slogan="Sometimes to love someone, you got to be a stranger."
                    image = "https://i.postimg.cc/brrpBVmY/blade-runner2.jpg"
                />
                <MovieComp 
                    title="Justice League" 
                    slogan="I Don't Care How Many Demons He's Fought In How Many Hells."
                    image ="https://i.postimg.cc/QCH0Pc1Z/justice-league2.jpg"
                />
                <MovieComp 
                    title="Avangers:Endgame" 
                    slogan="I don't judge people by their worst mistakes."
                    image="https://i.postimg.cc/3rmsKTvM/avanger-endgame.jpg"
                />
                <MovieComp 
                    title="X-Men:Apocalypse" 
                    slogan="Those with the greatest power, this earth will be yours!"
                    image ="https://i.postimg.cc/xdFPDcRv/X-Men-Apocalypse.jpg"
                />
                <MovieComp 
                    title="X-Men:Apocalypse" 
                    slogan="Those with the greatest power, this earth will be yours!"
                    image ="https://i.postimg.cc/xdFPDcRv/X-Men-Apocalypse.jpg"
                />
                <MovieComp 
                    title="X-Men:Apocalypse" 
                    slogan="Those with the greatest power, this earth will be yours!"
                    image ="https://i.postimg.cc/xdFPDcRv/X-Men-Apocalypse.jpg"
                />
            </div>
        )
    }
}

export default HomePage;