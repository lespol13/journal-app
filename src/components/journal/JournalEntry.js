import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { activeNote } from "../../actions/notes";

const JournalEntry = ({ id, title, body, date, url }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { title, body, date, url }));
  };

  return (
    <div
      className="journal__entry pointer animate__animated animate__zoomIn animate__faster"
      onClick={handleEntryClick}
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
