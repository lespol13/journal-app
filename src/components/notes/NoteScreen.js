import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://scontent.fmex1-2.fna.fbcdn.net/v/t31.18172-8/13528206_1203137753063937_9105763795849332410_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=973b4a&_nc_ohc=0RMrqGmio1IAX_odigp&_nc_ht=scontent.fmex1-2.fna&oh=850d29ff1ef69d531007f279d4e85e89&oe=61B5AA9F"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
