
const audioPlayerContainerStyle = {
    width:"50vw",
    height:"40px",
    background: "rgba(0,0,0,0.7)",
    borderRadius: "25px",
    padding:"10px"
}

const audioPlayerStyle = {
    width:"100%",
    height:"100%",
    background: "rgba(0,0,0,0)",
    padding:"0px",
    margin:"0px",
    borderRadius: "25px",
    background: "black"
    // filter:"invert()"
}

export default function AudioPlayer(props) {

    return (
        <div className="audio-player-container" style={audioPlayerContainerStyle}>
            <audio controls style={audioPlayerStyle} src={props.audioSrc}></audio>
        </div>
    );
}