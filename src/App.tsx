import { useEffect, useState } from "react"

type Track = {
  id: number,
  title: string,
  url: string
}



export const App = () => {

  

  // const promise = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
  //   headers:{    
  //     'api-key': 'e498d8b8-f717-4c68-8b50-8a9ad6b43cc9',}
  // })

  // promise.then(res => res.json()).then(data => console.log(data))

  
  const [selectedTrackId, setSelectedTrackId] = useState<null | number>(null)
  const [tracks, setTracks] = useState<Track[] | null>(null)

 

  useEffect(() => {
    console.log('effect')
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY
      }
    }).then(res => res.json())
    .then(json => setTracks(json.data))
  
  }, [])


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
      <button onClick={() => setSelectedTrackId(null)}>Reset selection</button>
      <ul>
        {tracks.map((track) => (
          <li key={track.id} style={{border: track.id === selectedTrackId ? '1px solid orange' : 'none'}}>
            <div onClick={() => {
              setSelectedTrackId(track.id) // передаём реакту актуальный id
            }}>{track.attributes.title}</div>
            <audio src={track.attributes.attachments[0].url} controls={true}/>
          </li>
        ))}
      </ul>
    </div>
  )
}


