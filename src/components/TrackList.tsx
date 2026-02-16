import { useEffect, useState } from "react"
import type { Track } from "../App"

export const  TrackList = () => {

    const [tracks, setTracks] = useState<Track[] | null>(null)
    const [selectedTrackId, setSelectedTrackId] = useState<null | number>(null)

    useEffect(() => {
        console.log("effect")
        fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
          headers: {
            "api-key": import.meta.env.VITE_API_KEY,
          },
        })
          .then((res) => res.json())
          .then((json) => setTracks(json.data))
      }, [])


    
  if (tracks === null) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }

  if (tracks?.length === 0) {
    return (
      <div>
        <span>No tracks</span>
      </div>
    )
  }
    return <ul>
    {tracks.map((track) => (
      <li key={track.id} style={{ 
        border: track.id === selectedTrackId ? "1px solid orange" : "none" 
        }}>
        <div onClick={() => {
          setSelectedTrackId(track.id) // передаём реакту актуальный id
        }}>{track.attributes.title}</div>
        <audio src={track.attributes.attachments[0].url} controls={true} />
      </li>
    ))}
  </ul>
  }