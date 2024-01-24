import React from "react";
import {Link} from 'react-router-dom'



const Map = () => {
  // Replace 'your-map-image-url' with the actual URL of your map image
const mapImageUrl = "https://i.pinimg.com/originals/94/15/d2/9415d273b5a90c14e762881df3742b1e.png"
  return (
    
    <div>
        <Link to="/">Back to Tags</Link>

      <h2>Store Map</h2>
      <img src={mapImageUrl} alt="Map" style={{ width: "60%", maxWidth: "800px" }}/>
      
    </div>
  );
};

export default Map;
