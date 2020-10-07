import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
      <div className="widgets">
        <iframe
          src="https://www.youtube.com/embed/v64KOxKVLVg"
          width="340"
          height="50%"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
}

export default Widgets
