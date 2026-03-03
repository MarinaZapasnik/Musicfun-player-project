

export type TrackDetailsResourceData = {
    id: string
    attributes: {
      title: string
      lyrics?: string | null
    }
  }

  export type AttachmentsDto = {
    url: string
  }

  export type TrackListItemAttributes = {
    title: string
    attachments: AttachmentsDto []
  }
  
  export type TrackListItemResource = {
    id: string 
    attributes: TrackListItemAttributes
  }

export const getTrack = (trackId: string) => {
    const promise: Promise<{data: TrackDetailsResourceData}> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: {
            "api-key": import.meta.env.VITE_API_KEY,
        },
    }).then((res) => res.json())
    return promise
}

export const getTracks = () => {
  const promise: Promise<{data: TrackListItemResource[]}> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
    headers: {
      "api-key": import.meta.env.VITE_API_KEY,
    },
  })
    .then((res) => res.json())
    return promise
}