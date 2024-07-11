import { Track, SimplifiedArtist, SimplifiedAlbum } from "spotify-types";

export interface PlaycountTrackInfo {
  album_id: string;
  track_id: string;
  name: string;
}

export interface PlaycountAPIResponse {
  success: boolean;
  data: PlaycountAPIResponseData;
}

interface PlaycountAPIResponseData {
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
  name:  string;
  uri:   string;
  image: Cover;
}

export interface Cover {
  uri: string;
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

export type FormattedTrackData = {
  id: string;
  name: string;
  artist: string;
  playcount: number;
  preview_url: string;
  album_image_url: string;
}

interface PlayableAlbum extends SimplifiedAlbum {
  is_playable: boolean;
}

export interface SimplifiedArtistsTrack extends Omit<Track, 'album' | 'artists'> {
  album: PlayableAlbum;
  artists: SimplifiedArtist[];
  episode: boolean;
  track: boolean;
}

export interface ArtistInfoProps {
  track: FormattedTrackData | undefined;
  hideImg: boolean;
}

export interface TrackInfoProps {
  artistName: string;
  trackAlbumImage: string;
  trackName: string;
  playcount: number;
}

export interface PlaycountCounterProps {
  playcount: number;
}

export interface TooltipProps {
  currentTrack: FormattedTrackData | undefined;
}
