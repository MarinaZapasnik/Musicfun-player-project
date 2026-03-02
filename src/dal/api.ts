

export type TrackDetailsRsourceData = {
    id: string
    attributes: {
      title: string
      lyrics?: string | null
    }
  }


export const getTrack = (trackId: string) => {
    const promise: Promise<{data: TrackDetailsRsourceData}> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: {
            "api-key": import.meta.env.VITE_API_KEY,
        },
    }).then((res) => res.json())
    return promise
}




////22урок ///25мин