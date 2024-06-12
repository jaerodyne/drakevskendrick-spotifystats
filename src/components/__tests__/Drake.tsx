import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Drake from '../Drake';

// const mockNavigate = vi.fn()
// vi.mock('react-router-dom', async () => ({
// 	...(await vi.importActual<typeof ReactRouterDOM>('react-router-dom')),
// 	useNavigate: (): typeof mockNavigate => mockNavigate
// }))

const drakeTrack = {
  "album": {
    "album_type": "album",
    "total_tracks": 17,
    "external_urls": {
      "spotify": "https://open.spotify.com/album/4iqbFIdGOTzXeDtt9owjQn"
    },
    "href": "https://api.spotify.com/v1/albums/4iqbFIdGOTzXeDtt9owjQn",
    "id": "4iqbFIdGOTzXeDtt9owjQn",
    "images": [
      {
        "url": "https://i.scdn.co/image/ab67616d0000b273a46b07c291e6dfdee13b3ee8",
        "height": 640,
        "width": 640
      },
      {
        "url": "https://i.scdn.co/image/ab67616d00001e02a46b07c291e6dfdee13b3ee8",
        "height": 300,
        "width": 300
      },
      {
        "url": "https://i.scdn.co/image/ab67616d00004851a46b07c291e6dfdee13b3ee8",
        "height": 64,
        "width": 64
      }
    ],
    "name": "WE DON'T TRUST YOU",
    "release_date": "2024-03-22",
    "release_date_precision": "day",
    "type": "album",
    "uri": "spotify:album:4iqbFIdGOTzXeDtt9owjQn",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1RyvyyTE3xzB2ZywiAwp0i"
        },
        "href": "https://api.spotify.com/v1/artists/1RyvyyTE3xzB2ZywiAwp0i",
        "id": "1RyvyyTE3xzB2ZywiAwp0i",
        "name": "Future",
        "type": "artist",
        "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
        },
        "href": "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
        "id": "0iEtIxbK0KxaSlF7G42ZOp",
        "name": "Metro Boomin",
        "type": "artist",
        "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
      }
    ],
    "is_playable": true
  },
  "artists": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/1RyvyyTE3xzB2ZywiAwp0i"
      },
      "href": "https://api.spotify.com/v1/artists/1RyvyyTE3xzB2ZywiAwp0i",
      "id": "1RyvyyTE3xzB2ZywiAwp0i",
      "name": "Future",
      "type": "artist",
      "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
      },
      "href": "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
      "id": "0iEtIxbK0KxaSlF7G42ZOp",
      "name": "Metro Boomin",
      "type": "artist",
      "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id": "2YZyLoL8N0Wb9xBt1NhZWg",
      "name": "Kendrick Lamar",
      "type": "artist",
      "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    }
  ],
  "disc_number": 1,
  "duration_ms": 267706,
  "explicit": true,
  "external_ids": {
    "isrc": "USSM12402041"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/2tudvzsrR56uom6smgOcSf"
  },
  "href": "https://api.spotify.com/v1/tracks/2tudvzsrR56uom6smgOcSf",
  "id": "2tudvzsrR56uom6smgOcSf",
  "is_playable": true,
  "name": "Like That",
  "popularity": 96,
  "preview_url": "https://p.scdn.co/mp3-preview/793f43da71fe668c35b72a38ae7f93e783823e17?cid=cfe923b2d660439caf2b557b21f31221",
  "track_number": 6,
  "type": "track",
  "uri": "spotify:track:2tudvzsrR56uom6smgOcSf",
  "is_local": false,
  "episode": false,
  "track": true
}

function renderDrake(): void {
	render(<Drake track={drakeTrack} playcount={0} hideImg={false} />)
}

describe('<Drake />', () => {
	it('renders', () => {
		renderDrake()
    screen.getByRole('img', { name: 'drake '})
		).toBeInTheDocument()
		expect(
			screen.getByRole('link', { name: 'Matheus Cenali' })
		).toBeInTheDocument()
		expect(screen.getByText('on')).toBeInTheDocument()
		expect(screen.getByRole('link', { name: 'Unsplash' })).toBeInTheDocument()

		expect(screen.getByText('Apple')).toBeInTheDocument()
	})
	// it('redirect to fruit details page on enter', async () => {
	// 	renderFruit()

	// 	screen.getByTestId('FruitCard').focus()
	// 	// No action should be performed
	// 	await userEvent.keyboard('a')
	// 	await userEvent.keyboard('[Enter]')

	// 	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	// 	expect(mockNavigate).toHaveBeenCalledTimes(1)
	// 	expect(mockNavigate).toHaveBeenCalledWith('apple')
	// })
	// it('redirect to photographer profile page on image attribute link click', async () => {
	// 	renderFruit()

	// 	await userEvent.click(screen.getByRole('link', { name: 'Matheus Cenali' }))

	// 	expect(mockNavigate).toHaveBeenCalledTimes(0)
	// })
})