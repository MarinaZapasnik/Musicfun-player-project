


export const TrackItem = ({ track, onSelect, isSelected }) => {

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
