export const clientId: string = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const clientSecret: string = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
export const playlistTracksUrl: string = "https://api.spotify.com/v1/playlists/7JHlkZQ9HZ5dgEDZCBeAsW/tracks";
export const albumPlayCountBaseUrl: string = "https://api.t4ils.dev/albumPlayCount?albumid=";

interface TrackInfo {
  album_id: string;
  track_id: string;
  name: string;
}

export const trackInfo: Array<TrackInfo> = [
  { album_id: "4iqbFIdGOTzXeDtt9owjQn", track_id: "2tudvzsrR56uom6smgOcSf", name: "Like That" },
  { album_id: "06me0leRR3AuF4IFiEytml", track_id: "3eh51r6rFWAlGQRlHx9QnQ", name: "Push Ups" },
  { album_id: "32bR4LcEc1PvJEhaKoo4ZN", track_id: "77DRzu7ERs0TX3roZcre7Q", name: "euphoria" },
  { album_id: "3qwCuSISrIUpyt6sB5edmQ", track_id: "1wFFFzJ5EsKbBWZriAcubN", name: "Family Matters" },
  { album_id: "5PGH88Cwual1Nj8d2RsKP0", track_id: "4S8PxReB1UiDR2F5x1lyIR", name: "meet the grahams" },
  { album_id: "5JjnoGJyOxfSZUZtk2rRwZ", track_id: "6AI3ezQ4o3HUoP6Dhudph3", name: "Not Like Us" },
]

interface PlaycountAPIData {
  success: boolean;
  data: object;
}

export const dummyData: Array<PlaycountAPIData> = [
  {
    "success": true,
    "data": {
        "uri": "spotify:album:4iqbFIdGOTzXeDtt9owjQn",
        "name": "WE DON'T TRUST YOU",
        "cover": {
            "uri": "https://i.scdn.co/image/ab67616d00001e02a46b07c291e6dfdee13b3ee8"
        },
        "year": 2024,
        "month": 3,
        "day": 22,
        "track_count": 17,
        "discs": [
            {
                "number": 1,
                "name": "WE DON'T TRUST YOU",
                "tracks": [
                    {
                        "uri": "spotify:track:1pnDvUuAEd6z8bKEsbAjk1",
                        "playcount": 60904333,
                        "name": "We Don't Trust You",
                        "popularity": 0,
                        "number": 1,
                        "duration": 226213,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:3OxL6MuctgZp1e0zxoAZhH",
                        "playcount": 60614034,
                        "name": "Young Metro",
                        "popularity": 0,
                        "number": 2,
                        "duration": 205346,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:70ToiXlzl8N1EgfC07ZcZE",
                        "playcount": 35405450,
                        "name": "Ice Attack",
                        "popularity": 0,
                        "number": 3,
                        "duration": 199253,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:28drn6tQo95MRvO0jQEo5C",
                        "playcount": 156511142,
                        "name": "Type Shit",
                        "popularity": 0,
                        "number": 4,
                        "duration": 228266,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:57ELn9TPDIhrpl0dasS465",
                        "playcount": 23892402,
                        "name": "Claustrophobic",
                        "popularity": 0,
                        "number": 5,
                        "duration": 222053,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:2tudvzsrR56uom6smgOcSf",
                        "playcount": 282820281,
                        "name": "Like That",
                        "popularity": 0,
                        "number": 6,
                        "duration": 267706,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:2GLWhy9iiO1wrLUF5l4FtJ",
                        "playcount": 26468688,
                        "name": "Slimed In",
                        "popularity": 0,
                        "number": 7,
                        "duration": 194906,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:7pBcryEKcUEaWHwAu1wUyP",
                        "playcount": 22772130,
                        "name": "Magic Don Juan (Princess Diana)",
                        "popularity": 0,
                        "number": 8,
                        "duration": 220733,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:0hKtu53OlIFXVuYkZwcn3o",
                        "playcount": 103116784,
                        "name": "Cinderella",
                        "popularity": 0,
                        "number": 9,
                        "duration": 169840,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:4q7y1JFDBJSBSLqXVgcI51",
                        "playcount": 23932944,
                        "name": "Runnin Outta Time",
                        "popularity": 0,
                        "number": 10,
                        "duration": 205480,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:28xOPIPw0joNPwYd0asIT5",
                        "playcount": 26761521,
                        "name": "Fried (She a Vibe)",
                        "popularity": 0,
                        "number": 11,
                        "duration": 210173,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:72qABvaqn3TP6drO2tByA6",
                        "playcount": 17793579,
                        "name": "Ain't No Love",
                        "popularity": 0,
                        "number": 12,
                        "duration": 182840,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:3Vg7nPYlOrCkcV1abKbRQ1",
                        "playcount": 27834350,
                        "name": "Everyday Hustle",
                        "popularity": 0,
                        "number": 13,
                        "duration": 226946,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:4XF9fk0STp9hx8xn5Suwpz",
                        "playcount": 18627617,
                        "name": "GTA",
                        "popularity": 0,
                        "number": 14,
                        "duration": 233026,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:5imsnhkfPCm3wajS9ksb21",
                        "playcount": 13820382,
                        "name": "Seen it All",
                        "popularity": 0,
                        "number": 15,
                        "duration": 179440,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:1xwvjqcwflD2NEqRCNcCo2",
                        "playcount": 15631304,
                        "name": "WTFYM",
                        "popularity": 0,
                        "number": 16,
                        "duration": 292600,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    },
                    {
                        "uri": "spotify:track:30TcFxtFyju8isK6Hjo9KY",
                        "playcount": 13148050,
                        "name": "Where My Twin @ - Bonus",
                        "popularity": 0,
                        "number": 17,
                        "duration": 122786,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Future",
                                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                                "image": {
                                    "uri": ""
                                }
                            },
                            {
                                "name": "Metro Boomin",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "copyrights": [
            "(P) 2024 Wilburn Holding Co. and Boominati Worldwide, under exclusive license to Epic Records, a division of Sony Music Entertainment. With Republic Records, a division of UMG Recordings, Inc."
        ],
        "artists": [
            {
                "name": "Future",
                "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
                "image": {
                    "uri": ""
                }
            },
            {
                "name": "Metro Boomin",
                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp",
                "image": {
                    "uri": ""
                }
            }
        ],
        "related": {
            "releases": []
        },
        "type": "ALBUM",
        "label": "Wilburn Holding Co./Boominati/Epic/Republic"
    }
  },
  {
    "success": true,
    "data": {
        "uri": "spotify:album:06me0leRR3AuF4IFiEytml",
        "name": "Push Ups",
        "cover": {
            "uri": "https://i.scdn.co/image/ab67616d00001e0284bfd0d363f0179ac7c97fa5"
        },
        "year": 2024,
        "month": 4,
        "day": 19,
        "track_count": 1,
        "discs": [
            {
                "number": 1,
                "name": "Push Ups",
                "tracks": [
                    {
                        "uri": "spotify:track:3eh51r6rFWAlGQRlHx9QnQ",
                        "playcount": 84477735,
                        "name": "Push Ups",
                        "popularity": 0,
                        "number": 1,
                        "duration": 232774,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Drake",
                                "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "copyrights": [
            "\u00a9 2024 OVO, under exclusive license to Republic Records, a division of UMG Recordings, Inc.",
            "\u2117 2024 OVO, under exclusive license to Republic Records, a division of UMG Recordings, Inc."
        ],
        "artists": [
            {
                "name": "Drake",
                "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4",
                "image": {
                    "uri": ""
                }
            }
        ],
        "related": {
            "releases": []
        },
        "type": "SINGLE",
        "label": "OVO/Republic"
    }
  },
  {
    "success": true,
    "data": {
        "uri": "spotify:album:32bR4LcEc1PvJEhaKoo4ZN",
        "name": "euphoria",
        "cover": {
            "uri": "https://i.scdn.co/image/ab67616d00001e027587213b1be294ac4000f648"
        },
        "year": 2024,
        "month": 4,
        "day": 30,
        "track_count": 1,
        "discs": [
            {
                "number": 1,
                "name": "euphoria",
                "tracks": [
                    {
                        "uri": "spotify:track:77DRzu7ERs0TX3roZcre7Q",
                        "playcount": 112003068,
                        "name": "euphoria",
                        "popularity": 0,
                        "number": 1,
                        "duration": 383639,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Kendrick Lamar",
                                "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "copyrights": [
            "\u00a9 2024 Kendrick Lamar, under exclusive license to Interscope Records",
            "\u2117 2024 Kendrick Lamar, under exclusive license to Interscope Records"
        ],
        "artists": [
            {
                "name": "Kendrick Lamar",
                "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg",
                "image": {
                    "uri": ""
                }
            }
        ],
        "related": {
            "releases": []
        },
        "type": "SINGLE",
        "label": "Kendrick Lamar, under exclusive license to Interscope Records"
    }
  },
  {
    "success": true,
    "data": {
        "uri": "spotify:album:3qwCuSISrIUpyt6sB5edmQ",
        "name": "Family Matters",
        "cover": {
            "uri": "https://i.scdn.co/image/ab67616d00001e02a0ac23f4b446a7264e67bf0e"
        },
        "year": 2024,
        "month": 5,
        "day": 3,
        "track_count": 1,
        "discs": [
            {
                "number": 1,
                "name": "Family Matters",
                "tracks": [
                    {
                        "uri": "spotify:track:1wFFFzJ5EsKbBWZriAcubN",
                        "playcount": 46140910,
                        "name": "Family Matters",
                        "popularity": 0,
                        "number": 1,
                        "duration": 456933,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Drake",
                                "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "copyrights": [
            "\u00a9 2024 OVO, under exclusive license to Republic Records, a division of UMG Recordings, Inc.",
            "\u2117 2024 OVO, under exclusive license to Republic Records, a division of UMG Recordings, Inc."
        ],
        "artists": [
            {
                "name": "Drake",
                "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4",
                "image": {
                    "uri": ""
                }
            }
        ],
        "related": {
            "releases": []
        },
        "type": "SINGLE",
        "label": "OVO/Republic"
    }
  },
  {
    "success": true,
    "data": {
        "uri": "spotify:album:5PGH88Cwual1Nj8d2RsKP0",
        "name": "meet the grahams",
        "cover": {
            "uri": "https://i.scdn.co/image/ab67616d00001e02ba8b74f6b8523c328be1bdd2"
        },
        "year": 2024,
        "month": 5,
        "day": 3,
        "track_count": 1,
        "discs": [
            {
                "number": 1,
                "name": "meet the grahams",
                "tracks": [
                    {
                        "uri": "spotify:track:4S8PxReB1UiDR2F5x1lyIR",
                        "playcount": 41472934,
                        "name": "meet the grahams",
                        "popularity": 0,
                        "number": 1,
                        "duration": 392138,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Kendrick Lamar",
                                "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "copyrights": [
            "\u00a9 2024 Kendrick Lamar, under exclusive license to Interscope Records",
            "\u2117 2024 Kendrick Lamar, under exclusive license to Interscope Records"
        ],
        "artists": [
            {
                "name": "Kendrick Lamar",
                "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg",
                "image": {
                    "uri": ""
                }
            }
        ],
        "related": {
            "releases": []
        },
        "type": "SINGLE",
        "label": "Kendrick Lamar under exclusive license to Interscope Records"
    }
  },

  {
    "success": true,
    "data": {
        "uri": "spotify:album:5JjnoGJyOxfSZUZtk2rRwZ",
        "name": "Not Like Us",
        "cover": {
            "uri": "https://i.scdn.co/image/ab67616d00001e021ea0c62b2339cbf493a999ad"
        },
        "year": 2024,
        "month": 5,
        "day": 4,
        "track_count": 1,
        "discs": [
            {
                "number": 1,
                "name": "Not Like Us",
                "tracks": [
                    {
                        "uri": "spotify:track:6AI3ezQ4o3HUoP6Dhudph3",
                        "playcount": 150493785,
                        "name": "Not Like Us",
                        "popularity": 0,
                        "number": 1,
                        "duration": 274192,
                        "explicit": true,
                        "playable": true,
                        "artists": [
                            {
                                "name": "Kendrick Lamar",
                                "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg",
                                "image": {
                                    "uri": ""
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "copyrights": [
            "\u00a9 2024 Kendrick Lamar, under exclusive license to Interscope Records",
            "\u2117 2024 Kendrick Lamar, under exclusive license to Interscope Records"
        ],
        "artists": [
            {
                "name": "Kendrick Lamar",
                "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg",
                "image": {
                    "uri": ""
                }
            }
        ],
        "related": {
            "releases": []
        },
        "type": "SINGLE",
        "label": "Kendrick Lamar, under exclusive license to Interscope Records"
    }
  },
]

export interface FormattedTrackData {
  id: number;
  name: string;
  artist: Array<string>
  popularity: number;
  playcount: string;
}