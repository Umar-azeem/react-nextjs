import React, { useEffect, useState } from 'react'

function Practices() {

const umarAge = 28
useEffect(()=>{
  const time = setTimeout(()=>{
    console.log(umarAge)
  }, 5000)

  return () =>{
    clearTimeout(time)
  }
}, [])

const [ok,setOk]=useState(false)

const [games, setGames] = useState([]);

useEffect(()=>{
  if(!ok) return
  fetch("https://epic-backend-fslq.vercel.app/api/games").then(res => res.json()).then(data => setGames(data))
},[ok])

return (

<>

<div className='p-4'>
<button className='border rounded border-black p-2 my-4' onClick={()=>setOk(true)}>show me</button>
  {games.map((game) => ( 
    <p key={game._id}>{game.title}</p>
  ))}
</div>
</>
  )
}

export default Practices