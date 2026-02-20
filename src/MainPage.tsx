import { useState } from "react"
import { TrackDetail } from "./components/TrackDetail"
import { TrackList } from "./components/TrackList"


export type Track = {
  id: number
  title: string
  url: string
}

export const MainPage = () => {

  const [trackId, setTrackId] = useState(null)
  return (
    <div>
      
      <div style = {{display: 'flex', gap: '40px'}}>
        <TrackList onTrackSelected={(id: string) => {
          setTrackId(id)
        }}/>
        <TrackDetail trackId={trackId}/>
      </div>
      
    </div>

  )
}
