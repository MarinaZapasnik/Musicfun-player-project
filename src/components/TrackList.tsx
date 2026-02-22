import { useEffect, useState } from "react"
import type { Track } from "../MainPage"
import { TrackItem } from "./TrackItem"

export const TrackList = ({selectedTrackId, onTrackSelected}) => {
  const [tracks, setTracks] = useState<Track[] | null>(null)

  const handleReset = () => {
    
        onTrackSelected?.(null)
        
  }

  const handleClick = (trackId) => {
            onTrackSelected?.(trackId);
          };


  useEffect(() => {
  
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
  return (
    <div>
      <button onClick={handleReset}>reset</button>
      <hr/>
      <ul>
        {tracks.map((track) => {
          
          
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === selectedTrackId}
              
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  )
}