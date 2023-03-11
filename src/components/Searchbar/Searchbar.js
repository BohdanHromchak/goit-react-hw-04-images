import PropTypes from 'prop-types';
import { useState } from "react";
import { toast } from 'react-toastify';
import css from "./Searchbar.module.css"
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = ({ onFormSubmit }) => {
  const [imageName, setImageName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageName.trim() === "") {
      toast.warn('Please, enter image name.');
    } else {
      onFormSubmit(imageName);
      setImageName("");
    }
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm__button}>
          <AiOutlineSearch size={23} />
        </button>

        <input
          className={css.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="imageName"
          value={imageName}
          onChange={(e) => setImageName(e.target.value.toLowerCase())}
        />
      </form>
    </header>
  );
};


Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}