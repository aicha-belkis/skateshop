import React from "react";
import CanvasVideo from 'react-canvas-video'


const Home = () => {
    return (
        <div className="App">
            <CanvasVideo
                src='./videos/home.mp4'
                options={{
                    text: 'SKATE MOOD',

                    autoplay: true,

                }}

                styles={{
                    barContainer: {
                        backgroundColor: '#292b2c'
                    }
                }}
            />

        </div>

    )
}
export default Home;