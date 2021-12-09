import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import NotesAppBar from "./NotesAppBar";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeletingNote } from "../../actions/notes";

const NoteScreen = () => {
  const { active } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(active);
  const { title, body, id } = formValues;

  const activeId = useRef(active.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active);
      activeId.current = active.id;
    }
  }, [active, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeletingNote(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar date={active.date} />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="What happened today"
          className="notes__text-area"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {active.url && (
          <div className="notes__image">
            <img src={active.url} alt="img" />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
