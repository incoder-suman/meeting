import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VideoComp = () => {
  const { roomID } = useParams(); // Get roomID from the URL
  const containerRef = useRef(null); // Reference to the container div

  useEffect(() => {
    const myMeeting = async () => {
      if (!roomID || !containerRef.current) return; // Validate roomID and container

      try {
        // Generate Kit Token
        const appID = 1469633192;
        const serverSecret = "923312eadc876c6f82e6485855721c90"; // Move this to the backend for security
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          Date.now().toString(),
          "Anonymous"
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Start the call
        zp.joinRoom({
          container: containerRef.current, // Attach container
          sharedLinks: [
            {
              name: "Personal link",
              url:
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname +
                "?roomID=" +
                roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // Use GroupCall or OneOnOneCall
          },
        });
      } catch (error) {
        console.error("Error initializing the meeting:", error);
      }
    };

    myMeeting();

    return () => {
      // Cleanup the container when the component unmounts
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // Clear container content
      }
    };
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      ref={containerRef} // Attach ref properly
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default VideoComp;
