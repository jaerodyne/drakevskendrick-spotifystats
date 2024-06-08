import { Dispatch } from "react";
import { ChartsItemContentProps } from "@mui/x-charts";
import { Track, PlaylistTrack} from "spotify-types";

export interface ArtistProps {
  track: Track | object;
  playcount: number;
  hideImg: boolean;
}

export interface PlaycountCounterProps {
  playcount: number;
}

export interface TooltipProps {
  playlistTracks: PlaylistTrack[];
  setCurrentTrack: Dispatch<React.SetStateAction<Track>>;
  setHideImg: Dispatch<React.SetStateAction<boolean>>;
  setCurrentPlaycount: Dispatch<React.SetStateAction<number>>;
  points: ChartsItemContentProps;
}