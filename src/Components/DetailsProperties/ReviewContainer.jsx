import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";
import ReviewPost from "./ReviewPost";
import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../redux/actions/reviewAction";

function ReviewContainer({ property }) {
  return (
    <div className="review mt-4 ">
      <h3>Reviews </h3>
      <ReviewPost />
      <div className="row">
        {property.reviews.map((review, id) => (
          <div className="col-12" key={id}>
            <ReviewItem  review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewContainer;
