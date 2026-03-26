

import { useTracks } from "../bll/useTracks"
import { TrackItem } from "./TrackItem"



type Props = {
  selectedTrackId: string | null
  onTrackSelected: (id : string | null) => void
}


export const TrackList = ({selectedTrackId, onTrackSelected} : Props) => {

  const {tracks, refresh} = useTracks()
  
  const handleRefresh = () => {
    
        refresh()
        
  }

  const handleClick = (trackId: string) => {
            onTrackSelected?.(trackId);
          };



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
      <button onClick={handleRefresh}>refresh</button>
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