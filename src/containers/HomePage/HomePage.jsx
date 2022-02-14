import React from "react";
import YoutubeComp from "../../components/YoutubeComp/YoutubeComp"

// Satate Full Component 
class HomePage extends React.Component {
    render(){
        return (
            <div>
                <YoutubeComp 
                    title="Blade Runner 2049" 
                    slogan="Sometimes to love someone, you got to be a stranger."
                    image = "https://i.postimg.cc/1RWKN6BS/blade-runner.jpg"
                />
                <YoutubeComp 
                    title="Justice League" 
                    slogan="I Don't Care How Many Demons He's Fought In How Many Hells."
                    image ="https://i.postimg.cc/mg93qnsZ/justice-league.jpg"
                />
                <YoutubeComp 
                    title="Avangers:Endgame" 
                    slogan="I don't judge people by their worst mistakes."
                    image="https://i.postimg.cc/dtLjR1Ny/avangers-endgame.jpg"
                />
                <YoutubeComp 
                    title="X-Men:Apocalypse" 
                    slogan="Those with the greatest power, this earth will be yours!"
                    image ="https://i.postimg.cc/ncgY3JNw/xmen.jpg"
                />
            </div>
        )
    }
}

export default HomePage;