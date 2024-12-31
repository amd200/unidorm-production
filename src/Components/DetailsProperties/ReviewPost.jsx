import React, { useEffect, useState } from "react";
import { TextArea } from "../Ui/Fields";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../redux/actions/reviewAction";
import { useParams } from "react-router-dom";
import notify from "../../hook/useNotifaction";
import { getOneProperty } from "../../redux/actions/propertiesAction";

function ReviewPost() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("4");
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.reviewReducer.review);
  const [loading, setLoading] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview({ rating: rating, comment: comment, propertyId: id }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (review && review.status == 201) {
        notify("Review added successfully", "success");
        dispatch(getOneProperty(id));
      } else {
        notify(review.data.msg, "warning");
      }
    }
  }, [review]);

  return (
    <div className="review-post mb-4">
      <TextArea placeholder={"Add your review..."} value={comment} onChange={(e) => setComment(e.target.value)} customClass={"mb-3"} row={6} />
      <button onClick={onSubmit} className="btn btn-primary2  d-block ms-auto">
        Add Review
      </button>
    </div>
  );
}

export default ReviewPost;
