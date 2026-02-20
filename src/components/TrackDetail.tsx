import { useEffect, useState } from "react"

export const  TrackDetail = (props) => {

  const selectedTrackId = props.trackId
  const [selectedTrack, setSelectedTrack] = useState(null)

  ////19-23 мин 

  useEffect(() => {
    if(!selectedTrackId) {
      setSelectedTrack(null)
      return
    }

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: {
        "api-key": import.meta.env.VITE_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data))
  }, [selectedTrackId])

    return  <div>
          <h3>Details</h3>
          {!selectedTrack && selectedTrackId && <span>Loading...</span>}
          {!selectedTrack && !selectedTrackId && <span>Track is not selected</span>}
          {selectedTrack && (
            <div>
              <h3>{`${selectedTrack.attributes.title}`}</h3>
              <h4>Lyrics</h4>
              <p>{`${selectedTrack.attributes.lyrics}` || `...`}</p>
            </div>
          )}
        </div>
  }