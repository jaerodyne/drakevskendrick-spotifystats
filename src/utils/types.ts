import { Dispatch } from "react";
import { ChartsItemContentProps } from "@mui/x-charts";
import { Track, PlaylistTrack} from "spotify-types";

export interface PlaycountTrackInfo {
  album_id: string;
  track_id: string;
  name: string;
}

export interface PlaycountAPIResponse {
  success: boolean;
  data: object;
}

export interface PlaycountAPIResponseData {
  uri:         string;
  name:        string;
  cover:       Cover;
  year:        number;
  month:       number;
  day:         number;
  track_count: number;
  discs:       Disc[];
  copyrights:  string[];
  artists:     Artist[];
  related:     Related;
  type:        string;
  label:       string;
}

export interface Artist {
  name:  Name;
  uri:   URI;
  image: Cover;
}

export interface Cover {
  uri: string;
}

export enum Name {
  Future = "Future",
  MetroBoomin = "Metro Boomin",
}

export enum URI {
  SpotifyArtist0IEtIxbK0KxaSlF7G42ZOp = "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
  SpotifyArtist1RyvyyTE3XzB2ZywiAwp0I = "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
}

export interface Disc {
  number: number;
  name:   string;
  tracks: PlaycountTrack[];
}

export interface PlaycountTrack {
  uri:        string;
  playcount:  number;
  name:       string;
  popularity: number;
  number:     number;
  duration:   number;
  explicit:   boolean;
  playable:   boolean;
  artists:    Artist[];
}

export interface Related {
  releases: string[];
}

export interface FormattedTrackData {
  id: number;
  name: string;
  artist: string[];
  popularity: number;
  playcount: number;
}

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
