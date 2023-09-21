import React from "react";
import "./NewsCard.css";
import { convertDateFormat } from "../../util/timeHelper";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/newsSlice";
import { useNavigate } from "react-router-dom";

function NewsCard({ newRef, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleONClick = () => {
    dispatch(newsActions.setNews({...data}));
    navigate('/news')
  };
  
  return (
    <div ref={newRef} onClick={handleONClick} className="newsCard">
      <div className="newsCard__img">
        <img
          src={
            data.urlToImage
              ? data.urlToImage
              : "https://via.placeholder.com/150"
          }
          alt=""
        />
      </div>
      <div className="newsCard__content">
        <div className="newsCard__upperSegment">
          <h3 className="newsCard__title">{data.title}</h3>
          <p className="newsCard__description">{`${data.description.slice(
            0,
            200
          )}...`}</p>
        </div>
        <p className="newsCard__published">
          {data.source.name && <span>{data.source.name} | </span>}
          {data.publishedAt && (
            <span>{convertDateFormat(data.publishedAt)}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
