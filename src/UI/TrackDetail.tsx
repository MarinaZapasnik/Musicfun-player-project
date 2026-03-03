import { useEffect, useState } from "react"
import { getTrack, type TrackDetailsResourceData } from "../dal/api"



type Props = {
  trackId: string | null
}

export const  TrackDetail = ({trackId} : Props) => {

  
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourceData | null>(null)

  useEffect(() => {
    if(!trackId) {
      setSelectedTrack(null)
      return
    }

    const promise = getTrack(trackId)
    promise.then((json) => setSelectedTrack(json.data))
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