import ReactPlayer from "react-player";
import { FC } from "react";

interface Props {
  url: string;
}

const VideoPlayer: FC<Props> = ({ url }) => {
  return (
    <div className="w-2/4 bg-black h-screen flex items-center justify-center">
      <ReactPlayer url={url} controls width="100%" height="90%" />
    </div>
  );
};

export default VideoPlayer;
