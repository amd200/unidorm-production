import React from "react";

function Badges({ numBadges,customClass }) {
  const badges = [];
  for (let i = 0; i < numBadges; i++) {
    badges.push(<span key={i} className="badge me-2 px-4 py-2 mb-2">Balcony</span>);
  }

  return (
    <div className={`badges ${customClass}`}>
      {/* Render the array of badges */}
      {badges}
      <span className="badge badge-danger me-2 px-4 py-2 mb-2">Bills Included</span>
    </div>
  );
}

export default Badges;
