import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

function Imgs({ property }) {
  return (
    <div className="imgs-properties mb-2">
      <LightGallery speed={500} plugins={[lgZoom, lgVideo]} licenseKey="YOUR_KEY" elementClassNames="row">
        {property && property.media && property.media.length > 0
          ? property.media.map((media, index) => {
              const isVideo = /\.(mp4|webm|mkv|ogg|avi)$/i.test(media);

              const uniqueKey = `${media}-${index}`;

              return (
                <React.Fragment key={uniqueKey}>
                  {!isVideo && (
                    <a href={media} className={`col-lg-4 ${index === 2 ? "more" : ""} ${index > 2 ? "d-none" : ""}`} data-count={ property.media.length > 3 && index === 2 ? "+" + (property.media.length - 2) : undefined}>
                      <img src={media} className="rounded img-fluid" alt={`Image ${index + 1}`} />
                    </a>
                  )}
                  {isVideo && (
                    <div className={`border-img mb-3 d-none`} data-video={`{"source": [{"src": "${media}", "type": "video/mp4"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}`}>
                      <video>
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </React.Fragment>
              );
            })
          : null}
      </LightGallery>
    </div>
  );
}

export default Imgs;
