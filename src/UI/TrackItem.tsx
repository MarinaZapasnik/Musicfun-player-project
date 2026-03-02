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


type Props = {
  track: TrackListItemResource
  onSelect: (trackId: string) => void
  isSelected: boolean
}


export const TrackItem = ({ track, onSelect, isSelected }  : Props) => {

  const handleClick = () => onSelect?.(track.id)
  
  return (
    <li
      key={track.id}
      style={{
        border: isSelected ? "1px solid orange" : "none",
      }}
    >
      <div onClick={handleClick}>
        {track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls={true} />
    </li>
  )
}
