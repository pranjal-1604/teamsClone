import { useContext } from "react";
import { Container, Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { SocketContext } from "../../../SocketContext";

/**
 *
 * @returns {video,Button} Conditionally renders user's video and audio once allowed access.
 * Has audio/video mute buttons.
 */

function MyVideoDisplay() {
  const {
    name,
    myVideo,
    stream,
    myVideoStatus,
    updateVideo,
    myMicStatus,
    updateMic,
  } = useContext(SocketContext);

  return (
    <>
      {stream && (
        <Col xs={12} md={6}>
          <Container height="200px">
            <Card
              style={{
                backgroundColor: "rgba(70,71,117,0.4)",
                borderRadius: "7px",
              }}
              className="mx-3 mt-2 mb-1"
            >
              <h5 style={{ color: "grey" }}>{name || "Name"}</h5>
              <video
                playsInline
                muted
                ref={myVideo}
                style={{ width: "100%" }}
                autoPlay
              />


              <div className="mx-auto" style={{ marginTop: "4px" }}>
                {/* Mic mute button */}
                <Button
                  variant="secondary"
                  onClick={() => {
                    updateMic();
                  }}
                  tabIndex="0"
                  style={{ borderRadius: "20px", marginRight: "8px" }}
                >
                  {/* Switch icons relative to current mic status */}
                  <i
                    className={`fa fa-microphone${myMicStatus ? "" : "-slash"}`}
                    style={{ transform: "scaleX(-1)", color: "black" }}
                    aria-label={`${myMicStatus ? "mic on" : "mic off"}`}
                    aria-hidden="true"
                  ></i>
                </Button>

                
                {/* Video mute button */}
                <Button
                  variant="secondary"
                  onClick={() => {
                    updateVideo();
                  }}
                  tabIndex="0"
                  style={{ borderRadius: "30px" }}
                >
                  {/* Switch icons relative to current video status */}
                  <i
                    className={`fa fa-rotate-180 fa-video${myVideoStatus ? "" : "-slash"}`}
                    style={{ transform: "scaleX(-1)", color: "black" }}
                    aria-label={`${myVideoStatus ? "video on" : "video off"}`}
                    aria-hidden="true"
                  ></i>
                </Button>
              </div>
            </Card>
          </Container>
        </Col>
      )}
    </>
  );
}
export default MyVideoDisplay;
