const audioPlayerStyle = {
    width:"100%",
    height:"100%",
    minHeight:"40px",
    background: "rgba(0,0,0,0)",
    borderRadius: "25px",
    position: "relative",
    marginTop: "0px"
    // filter:"invert()"
}

const frameStyle = {
    marginTop: "5px",
    width:"50vw",
    minHeight:"40px",
    background: "rgba(0,0,0,0.9)",
    padding: "10px",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    gap:"5px",
    color:"white"
}

const metadataStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    paddingLeft: "8px"
}

const titleStyle = {
    color: "white"
};
const artistStyle = {
    paddingLeft: "8px",
    color: "grey"
};

export default function AudioPlayer(props) {

    return (
        <div style={frameStyle}>
            <div style={metadataStyle}>
                <span style={titleStyle}>{props.title}</span>
                <span style={artistStyle}>{props.artist ? `\t- ${props.artist}` : ""}</span>
            </div>

            <audio controls style={audioPlayerStyle} src={props.audioSrc}></audio>
        </div>
        
    );
}