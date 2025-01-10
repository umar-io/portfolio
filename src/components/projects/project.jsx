import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const {
    logo,
    title,
    description,
    firstText,
    secondText,
    firstLink,
    secondLink,
  } = props;


  return (
    <React.Fragment>
      <div className="project">
        <div className="project-container">
          <div className="project-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div
            className="project-link"
            style={{
              gap: "4px",
            }}
          >
            <div
              style={{
                cursor: "pointer",
				display: "flex",
				gap: "4px",
				justifyContent: "center"
              }}
            >
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>

              <Link
                className="project-link-text"
                to={firstLink}
                style={{
                  cursor: "pointer",
                }}
              >
                {firstText}
              </Link>
            </div>

            <div
              style={{
                cursor: "pointer",
				display: "flex",
				gap: "4px",
				justifyContent: "center"
              }}
            >
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>

              <Link className="project-link-text" to={secondLink}>
                {secondText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
