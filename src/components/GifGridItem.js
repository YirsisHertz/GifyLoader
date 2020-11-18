import React from "react";
import PropTypes from "prop-types";

// import "./loading.css";
import "./GifGridItem.css";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img width="400" height="300" src={url} alt={title} />
      <p> {title} </p>
      <a
        className="ox-btn ox-btn-success ox-btn-rounded"
        href={url}
        title={title}
        alt={title + ".gif"}
        rel="noreferrer"
        target="_blank"
      >
        Download
      </a>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
