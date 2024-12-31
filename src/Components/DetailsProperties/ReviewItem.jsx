import React from "react";
import img from "../../assets/imgs/Image.jpg";
import { Rating } from "react-simple-star-rating";

function ReviewItem({ review }) {
  const timeDifference = new Date() - new Date(review.createdAt);
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let timeAgo;

  if (days > 0) {
    timeAgo = `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    timeAgo = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    timeAgo = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    timeAgo = `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }

  return (
    <div className="review-item border-bottom mb-4">
      <div className="d-flex align-items-start justify-content-between">
        <div className="review-destails d-flex align-items-center">
          <img src={img} alt="" className="me-3" />
          <div className="mt-2">
            <span className="rate-name d-block">{review.user.name}</span>
            <Rating fillColor="#ff8a00" emptyColor="#d3d3d3" style={{ position: "relative", bottom: "8px" }} readonly={true} initialValue={review.rating} size={19} />
          </div>
        </div>
        <span className="time">{timeAgo}</span>
      </div>
      <p className="reate-description">{review.comment}</p>
    </div>
  );
}

export default ReviewItem;
