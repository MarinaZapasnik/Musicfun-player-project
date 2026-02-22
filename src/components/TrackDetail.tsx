import { useEffect, useState } from "react"

export const  TrackDetail = ({trackId}) => {

  
  const [selectedTrack, setSelectedTrack] = useState(null)

  useEffect(() => {
    if(!trackId) {
      setSelectedTrack(null)
      return
    }

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
      headers: {
        "api-key": import.meta.env.VITE_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data))
  }, [trackId])

    return  <div>
          <h3>Details</h3>
          {!selectedTrack && trackId && <span>Loading...</span>}
          {!selectedTrack && !trackId && <span>Track is not selected</span>}
          {selectedTrack && (
            <div>
              <h3>{`${selectedTrack.attributes.title}`}</h3>
              <h4>Lyrics</h4>
              <p>{`${selectedTrack.attributes.lyrics}` || `...`}</p>
            </div>
          )}
        </div>
  }