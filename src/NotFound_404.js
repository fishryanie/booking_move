import React,{useState} from 'react'
import _404 from './Assets/Images/404.png'


export default function NotFound_404() {
  const [state] = useState({background: "#001232", height:'100vh'})
  return (
    <section className="d-flex align-items-center justify-content-center" style={state}>
      <div className="text-center"><img className="w-75" src={_404} alt={_404} /></div>
    </section>
  )
}
