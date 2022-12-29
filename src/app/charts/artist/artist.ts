export interface Artist {
  "topartists": {
    "artist": [
      {
        "name": string,
        "listeners": number,
        "mbid": string,
        "url": string,
        "streamable": number,
        "image": [
          {
            "#text": string,
            "size": string
          },
          {
            "#text": string,
            "size": string
          },
          {
            "#text": string,
            "size": string
          },
          {
            "#text": string,
            "size": string
          },
          {
            "#text": string,
            "size": string
          }
        ]
      }
    ]
  }
}