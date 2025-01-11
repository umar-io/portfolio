import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, sourceCodeLink, previewLink } = props;

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
                justifyContent: "center",
              }}
            >
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>

              <Link
                className="project-link-text"
                to={sourceCodeLink}
                style={{
                  cursor: "pointer",
                }}
              >
                Source Code
              </Link>
            </div>

            <div
              style={{
                cursor: "pointer",
                display: "flex",
                gap: "4px",
                justifyContent: "center",
              }}
            >
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>

              <Link className="project-link-text" to={previewLink}>
                Live Preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
