import { useState } from "react"

export const App = () => {

  

  // const promise = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
  //   headers:{    
  //     'api-key': 'e498d8b8-f717-4c68-8b50-8a9ad6b43cc9',}
  // })

  // promise.then(res => res.json()).then(data => console.log(data))

  const tracks = [
    {
      id: 1,
      isSelected: false,
      title: "Musicfun soundtrack",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      id: 2,
      isSelected: true,
      title: "Musicfun soundtrack instrumental",
      url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
  ]
   

  const [selectedTrackId, setSelectedTrackId] = useState<null | number>(null)
 
  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun player</h1>
        <span>Loading...</span>
      </div>
    )
  }

  if (tracks.length === 0) {
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
            }}>{track.title}</div>
            <audio src={track.url} controls={true}/>
          </li>
        ))}
      </ul>
    </div>
  )
}


