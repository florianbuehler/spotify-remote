import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentTrackIdState, isPlayingState, playlistState } from '../atoms';
import { useSpotifyApi } from '../hooks';
import { millisToMinutesAndSeconds } from '../utils/time';
import PlaylistTrackObject = SpotifyApi.PlaylistTrackObject;

type Props = {
  order: number;
  track: PlaylistTrackObject;
};

const Song: React.FC<Props> = ({ order, track }) => {
  const spotifyApi = useSpotifyApi();
  const [, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [, setIsPlaying] = useRecoilState(isPlayingState);
  const currentPlaylist = useRecoilValue(playlistState);

  const playSong = () => {
    if (track.track) {
      setCurrentTrackId(track.track?.id);
      setIsPlaying(true);
      void spotifyApi.play({
        context_uri: currentPlaylist?.uri,
        offset: {
          uri: track.track.uri
        }
      });
    }
  };

  return (
    <div
      className="grid grid-cols-4 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="col-span-2 flex items-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={track.track?.album.images[0].url} alt="cover" />
        <div>
          <p className="w-36 lg:w-64 truncate text-white">{track.track?.name}</p>
          <p className="w-40">{track.track?.artists.map((a) => a.name).join(', ')}</p>
        </div>
      </div>

      {/*<div className="flex items-center justify-between ml-auto md:ml-0">*/}
      <p className="self-center w-80 hidden md:inline">{track.track?.album.name}</p>
      <p className="self-center justify-self-end">
        {millisToMinutesAndSeconds(track.track?.duration_ms)}
      </p>
      {/*</div>*/}
    </div>
  );
};

export default Song;
