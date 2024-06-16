import {
  PlaycountAPIResponse,
  SimplifiedArtistsTrack
} from "./src/utils/Types";

export const clientId: string = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const clientSecret: string = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
export const playlistTracksUrl: string = "https://api.spotify.com/v1/playlists/7JHlkZQ9HZ5dgEDZCBeAsW/tracks";
export const albumPlayCountBaseUrl: string = "https://api.t4ils.dev/albumPlayCount?albumid=";
export const wikiUrl: string = "https://en.wikipedia.org/wiki/Drake%E2%80%93Kendrick_Lamar_feud";

export const dummyData: PlaycountAPIResponse[] = [
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

export const spotifyDummyData: object = {
  "collaborative": false,
  "description": "Kendrick vs. Drake Disses (in order, starting with Like That) Does not include &quot;Taylor Made Freestyle&quot; Sorry if I missed some songs",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/7JHlkZQ9HZ5dgEDZCBeAsW"
  },
  "followers": {
    "href": null,
    "total": 19208
  },
  "href": "https://api.spotify.com/v1/playlists/7JHlkZQ9HZ5dgEDZCBeAsW?market=US&locale=en-US%2Cen%3Bq%3D0.9%2Cla%3Bq%3D0.8",
  "id": "7JHlkZQ9HZ5dgEDZCBeAsW",
  "images": [
    {
      "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da842feb6844a3dd407c66f3e81b",
      "height": null,
      "width": null
    }
  ],
  "name": "Kendrick vs. Drake Disses (in order)",
  "owner": {
    "external_urls": {
      "spotify": "https://open.spotify.com/user/22nicxbosy3tj5izxtvat4p6y"
    },
    "href": "https://api.spotify.com/v1/users/22nicxbosy3tj5izxtvat4p6y",
    "id": "22nicxbosy3tj5izxtvat4p6y",
    "type": "user",
    "uri": "spotify:user:22nicxbosy3tj5izxtvat4p6y",
    "display_name": "sosa"
  },
  "public": true,
  "snapshot_id": "AAAAGDfYUwUtVZDqJ5jrdZq1GFc/cFHD",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/7JHlkZQ9HZ5dgEDZCBeAsW/tracks?offset=0&limit=100&market=US&locale=en-US,en;q%3D0.9,la;q%3D0.8",
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 7,
    "items": [
      {
        "added_at": "2024-05-01T22:14:51Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/22nicxbosy3tj5izxtvat4p6y"
          },
          "href": "https://api.spotify.com/v1/users/22nicxbosy3tj5izxtvat4p6y",
          "id": "22nicxbosy3tj5izxtvat4p6y",
          "type": "user",
          "uri": "spotify:user:22nicxbosy3tj5izxtvat4p6y"
        },
        "is_local": false,
        "track": {
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
        },
        "primary_color": null,
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2024-05-01T22:15:09Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/22nicxbosy3tj5izxtvat4p6y"
          },
          "href": "https://api.spotify.com/v1/users/22nicxbosy3tj5izxtvat4p6y",
          "id": "22nicxbosy3tj5izxtvat4p6y",
          "type": "user",
          "uri": "spotify:user:22nicxbosy3tj5izxtvat4p6y"
        },
        "is_local": false,
        "track": {
          "album": {
            "album_type": "single",
            "total_tracks": 1,
            "external_urls": {
              "spotify": "https://open.spotify.com/album/06me0leRR3AuF4IFiEytml"
            },
            "href": "https://api.spotify.com/v1/albums/06me0leRR3AuF4IFiEytml",
            "id": "06me0leRR3AuF4IFiEytml",
            "images": [
              {
                "url": "https://i.scdn.co/image/ab67616d0000b27384bfd0d363f0179ac7c97fa5",
                "height": 640,
                "width": 640
              },
              {
                "url": "https://i.scdn.co/image/ab67616d00001e0284bfd0d363f0179ac7c97fa5",
                "height": 300,
                "width": 300
              },
              {
                "url": "https://i.scdn.co/image/ab67616d0000485184bfd0d363f0179ac7c97fa5",
                "height": 64,
                "width": 64
              }
            ],
            "name": "Push Ups",
            "release_date": "2024-04-19",
            "release_date_precision": "day",
            "type": "album",
            "uri": "spotify:album:06me0leRR3AuF4IFiEytml",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
                },
                "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
                "id": "3TVXtAsR1Inumwj472S9r4",
                "name": "Drake",
                "type": "artist",
                "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
              }
            ],
            "is_playable": true
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
              },
              "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
              "id": "3TVXtAsR1Inumwj472S9r4",
              "name": "Drake",
              "type": "artist",
              "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
            }
          ],
          "disc_number": 1,
          "duration_ms": 232774,
          "explicit": true,
          "external_ids": {
            "isrc": "USUG12402283"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3eh51r6rFWAlGQRlHx9QnQ"
          },
          "href": "https://api.spotify.com/v1/tracks/3eh51r6rFWAlGQRlHx9QnQ",
          "id": "3eh51r6rFWAlGQRlHx9QnQ",
          "is_playable": true,
          "name": "Push Ups",
          "popularity": 90,
          "preview_url": "https://p.scdn.co/mp3-preview/6890d6f0749ecec39ce0bc1811b144ba1c19f7ee?cid=cfe923b2d660439caf2b557b21f31221",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:3eh51r6rFWAlGQRlHx9QnQ",
          "is_local": false,
          "episode": false,
          "track": true
        },
        "primary_color": null,
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2024-05-01T22:15:22Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/22nicxbosy3tj5izxtvat4p6y"
          },
          "href": "https://api.spotify.com/v1/users/22nicxbosy3tj5izxtvat4p6y",
          "id": "22nicxbosy3tj5izxtvat4p6y",
          "type": "user",
          "uri": "spotify:user:22nicxbosy3tj5izxtvat4p6y"
        },
        "is_local": false,
        "track": {
          "album": {
            "album_type": "single",
            "total_tracks": 1,
            "external_urls": {
              "spotify": "https://open.spotify.com/album/32bR4LcEc1PvJEhaKoo4ZN"
            },
            "href": "https://api.spotify.com/v1/albums/32bR4LcEc1PvJEhaKoo4ZN",
            "id": "32bR4LcEc1PvJEhaKoo4ZN",
            "images": [
              {
                "url": "https://i.scdn.co/image/ab67616d0000b2737587213b1be294ac4000f648",
                "height": 640,
                "width": 640
              },
              {
                "url": "https://i.scdn.co/image/ab67616d00001e027587213b1be294ac4000f648",
                "height": 300,
                "width": 300
              },
              {
                "url": "https://i.scdn.co/image/ab67616d000048517587213b1be294ac4000f648",
                "height": 64,
                "width": 64
              }
            ],
            "name": "euphoria",
            "release_date": "2024-04-30",
            "release_date_precision": "day",
            "type": "album",
            "uri": "spotify:album:32bR4LcEc1PvJEhaKoo4ZN",
            "artists": [
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
            "is_playable": true
          },
          "artists": [
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
          "duration_ms": 383639,
          "explicit": true,
          "external_ids": {
            "isrc": "USUG12402839"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/77DRzu7ERs0TX3roZcre7Q"
          },
          "href": "https://api.spotify.com/v1/tracks/77DRzu7ERs0TX3roZcre7Q",
          "id": "77DRzu7ERs0TX3roZcre7Q",
          "is_playable": true,
          "name": "euphoria",
          "popularity": 94,
          "preview_url": "https://p.scdn.co/mp3-preview/8a68b2d27d7eabc900ab6adfc8167c5d87b20875?cid=cfe923b2d660439caf2b557b21f31221",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:77DRzu7ERs0TX3roZcre7Q",
          "is_local": false,
          "episode": false,
          "track": true
        },
        "primary_color": null,
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2024-05-04T07:46:24Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/22nicxbosy3tj5izxtvat4p6y"
          },
          "href": "https://api.spotify.com/v1/users/22nicxbosy3tj5izxtvat4p6y",
          "id": "22nicxbosy3tj5izxtvat4p6y",
          "type": "user",
          "uri": "spotify:user:22nicxbosy3tj5izxtvat4p6y"
        },
        "is_local": false,
        "track": {
          "album": {
            "album_type": "single",
            "total_tracks": 1,
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3qwCuSISrIUpyt6sB5edmQ"
            },
            "href": "https://api.spotify.com/v1/albums/3qwCuSISrIUpyt6sB5edmQ",
            "id": "3qwCuSISrIUpyt6sB5edmQ",
            "images": [
              {
                "url": "https://i.scdn.co/image/ab67616d0000b273a0ac23f4b446a7264e67bf0e",
                "height": 640,
                "width": 640
              },
              {
                "url": "https://i.scdn.co/image/ab67616d00001e02a0ac23f4b446a7264e67bf0e",
                "height": 300,
                "width": 300
              },
              {
                "url": "https://i.scdn.co/image/ab67616d00004851a0ac23f4b446a7264e67bf0e",
                "height": 64,
                "width": 64
              }
            ],
            "name": "Family Matters",
            "release_date": "2024-05-03",
            "release_date_precision": "day",
            "type": "album",
            "uri": "spotify:album:3qwCuSISrIUpyt6sB5edmQ",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
                },
                "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
                "id": "3TVXtAsR1Inumwj472S9r4",
                "name": "Drake",
                "type": "artist",
                "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
              }
            ],
            "is_playable": true
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
              },
              "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
              "id": "3TVXtAsR1Inumwj472S9r4",
              "name": "Drake",
              "type": "artist",
              "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
            }
          ],
          "disc_number": 1,
          "duration_ms": 456933,
          "explicit": true,
          "external_ids": {
            "isrc": "USUG12402984"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1wFFFzJ5EsKbBWZriAcubN"
          },
          "href": "https://api.spotify.com/v1/tracks/1wFFFzJ5EsKbBWZriAcubN",
          "id": "1wFFFzJ5EsKbBWZriAcubN",
          "is_playable": true,
          "name": "Family Matters",
          "popularity": 89,
          "preview_url": "https://p.scdn.co/mp3-preview/1e4eea2082249ef2edc50fa9c4aac68be72bd3a1?cid=cfe923b2d660439caf2b557b21f31221",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:1wFFFzJ5EsKbBWZriAcubN",
          "is_local": false,
          "episode": false,
          "track": true
        },
        "primary_color": null,
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2024-05-05T10:45:00Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/22nicxbosy3tj5izxtvat4p6y"
          },
          "href": "https://api.spotify.com/v1/users/22nicxbosy3tj5izxtvat4p6y",
          "id": "22nicxbosy3tj5izxtvat4p6y",
          "type": "user",
          "uri": "spotify:user:22nicxbosy3tj5izxtvat4p6y"
        },
        "is_local": false,
        "track": {
          "album": {
            "album_type": "single",
            "total_tracks": 1,
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5PGH88Cwual1Nj8d2RsKP0"
            },
            "href": "https://api.spotify.com/v1/albums/5PGH88Cwual1Nj8d2RsKP0",
            "id": "5PGH88Cwual1Nj8d2RsKP0",
            "images": [
              {
                "url": "https://i.scdn.co/image/ab67616d0000b273ba8b74f6b8523c328be1bdd2",
                "height": 640,
                "width": 640
              },
              {
                "url": "https://i.scdn.co/image/ab67616d00001e02ba8b74f6b8523c328be1bdd2",
                "height": 300,
                "width": 300
              },
              {
                "url": "https://i.scdn.co/image/ab67616d00004851ba8b74f6b8523c328be1bdd2",
                "height": 64,
                "width": 64
              }
            ],
            "name": "meet the grahams",
            "release_date": "2024-05-03",
            "release_date_precision": "day",
            "type": "album",
            "uri": "spotify:album:5PGH88Cwual1Nj8d2RsKP0",
            "artists": [
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
            "is_playable": true
          },
          "artists": [
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
          "duration_ms": 392138,
          "explicit": true,
          "external_ids": {
            "isrc": "USUG12400909"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4S8PxReB1UiDR2F5x1lyIR"
          },
          "href": "https://api.spotify.com/v1/tracks/4S8PxReB1UiDR2F5x1lyIR",
          "id": "4S8PxReB1UiDR2F5x1lyIR",
          "is_playable": true,
          "name": "meet the grahams",
          "popularity": 88,
          "preview_url": "https://p.scdn.co/mp3-preview/3d21001480809fab1243caa09c2d328880f7024c?cid=cfe923b2d660439caf2b557b21f31221",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:4S8PxReB1UiDR2F5x1lyIR",
          "is_local": false,
          "episode": false,
          "track": true
        },
        "primary_color": null,
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2024-05-05T10:45:17Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/22nicxbosy3tj5izxtvat4p6y"
          },
          "href": "https://api.spotify.com/v1/users/22nicxbosy3tj5izxtvat4p6y",
          "id": "22nicxbosy3tj5izxtvat4p6y",
          "type": "user",
          "uri": "spotify:user:22nicxbosy3tj5izxtvat4p6y"
        },
        "is_local": false,
        "track": {
          "album": {
            "album_type": "single",
            "total_tracks": 1,
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5JjnoGJyOxfSZUZtk2rRwZ"
            },
            "href": "https://api.spotify.com/v1/albums/5JjnoGJyOxfSZUZtk2rRwZ",
            "id": "5JjnoGJyOxfSZUZtk2rRwZ",
            "images": [
              {
                "url": "https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad",
                "height": 640,
                "width": 640
              },
              {
                "url": "https://i.scdn.co/image/ab67616d00001e021ea0c62b2339cbf493a999ad",
                "height": 300,
                "width": 300
              },
              {
                "url": "https://i.scdn.co/image/ab67616d000048511ea0c62b2339cbf493a999ad",
                "height": 64,
                "width": 64
              }
            ],
            "name": "Not Like Us",
            "release_date": "2024-05-04",
            "release_date_precision": "day",
            "type": "album",
            "uri": "spotify:album:5JjnoGJyOxfSZUZtk2rRwZ",
            "artists": [
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
            "is_playable": true
          },
          "artists": [
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
          "duration_ms": 274192,
          "explicit": true,
          "external_ids": {
            "isrc": "USUG12400910"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3"
          },
          "href": "https://api.spotify.com/v1/tracks/6AI3ezQ4o3HUoP6Dhudph3",
          "id": "6AI3ezQ4o3HUoP6Dhudph3",
          "is_playable": true,
          "name": "Not Like Us",
          "popularity": 97,
          "preview_url": "https://p.scdn.co/mp3-preview/821def30e24f965adb480145744e4ed2a0f37903?cid=cfe923b2d660439caf2b557b21f31221",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:6AI3ezQ4o3HUoP6Dhudph3",
          "is_local": false,
          "episode": false,
          "track": true
        },
        "primary_color": null,
        "video_thumbnail": {
          "url": null
        }
      },
    ]
  },
  "type": "playlist",
  "uri": "spotify:playlist:7JHlkZQ9HZ5dgEDZCBeAsW",
  "primary_color": null
}
export const drakeAlbumTrackData: SimplifiedArtistsTrack = {
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
    "is_playable": true,
    "restrictions": []
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
    "isrc": "USSM12402041",
    "ean": "",
    "upc": "",
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
  "track": true,
  "restrictions": [],
}
