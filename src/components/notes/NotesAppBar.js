import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadingImg } from "../../actions/notes";

const NotesAppBar = ({ date }) => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const noteDate = moment(date);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (file) {
      dispatch(startUploadingImg(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>{noteDate.format("LL")}</span>
      <input
        type="file"
        id="fileSelector"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
