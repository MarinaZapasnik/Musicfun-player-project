import { useState } from "react"
import { TrackDetail } from "./components/TrackDetail"
import { TrackList } from "./components/TrackList"


export const MainPage = () => {

  const handleOnTrackSelected = (id: string | null): void => {
    setTrackId(id)
  }

  const [trackId, setTrackId] = useState<string | null>(null)
  return (
    <div>
      
      <div style = {{display: 'flex', gap: '40px'}}>
        <TrackList 
          selectedTrackId={trackId}
          onTrackSelected={handleOnTrackSelected}/>
        <TrackDetail trackId={trackId}/>
      </div>
      
    </div>

  )
}
