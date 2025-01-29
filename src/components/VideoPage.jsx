import React from "react";

const VideoPage = () => {
  return (
    <section className="mt-16 relative h-screen w-full">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          src="/src/assets/Main Video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
    </section>
  );
};

export default VideoPage;
