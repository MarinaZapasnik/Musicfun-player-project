import { useEffect, useState } from "react"

export type Track = {
  id: number
  title: string
  url: string
}

export const App = () => {
  // const promise = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
  //   headers:{
  //     'api-key': 'e498d8b8-f717-4c68-8b50-8a9ad6b43cc9',}
  // })

  // promise.then(res => res.json()).then(data => console.log(data))

  const [selectedTrackId, setSelectedTrackId] = useState<null | number>(null)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [tracks, setTracks] = useState<Track[] | null>(null)

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

  useEffect(() => {
    if(!selectedTrackId) {
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

  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun player</h1>
        <span>Loading...</span>
      </div>
    )
  }

  if (tracks?.length === 0) {
    return (
      <div>
        <h1>Musicfun player</h1>
        <span>No tracks</span>
      </div>
    )
  }

  return (
    <div>
      <h1>Musicfun</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null)
          setSelectedTrack(null)
        }}
      >
        Reset selection
      </button>
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <ul>
          {tracks.map((track) => (
            <li key={track.id} style={{ border: track.id === selectedTrackId ? "1px solid orange" : "none" }}>
              <div onClick={() => {
                setSelectedTrackId(track.id) // передаём реакту актуальный id
              }}>{track.attributes.title}</div>
              <audio src={track.attributes.attachments[0].url} controls={true} />
            </li>
          ))}
        </ul>
        <div>
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
      </div>
    </div>
  )
}
