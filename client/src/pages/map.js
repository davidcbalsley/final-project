import React, { useEffect } from "react";
import GoogleMap from "../components/map"
import "./map.css"
  
export default function Map() {

  
  return (
    <div className="container" style={{height:"100vh"}} >
      
      <GoogleMap latitude={38.784644} longitude={-90.461243}
      />
       
    </div>
  )
}