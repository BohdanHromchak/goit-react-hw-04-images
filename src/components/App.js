import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-notifications/lib/notifications.css';
import { fetchImages } from 'services/image-api';
import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from './ImageGallery/ImageGallery'
import { Loader } from './Loader/Loader';
import {Button} from './Button/Button'
import css from './App.module.css'

export const App = () => {
  const [imageName, setImagename] = useState("");
  const [imageArray, setimageArray] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!imageName) {
      return;
    }
    setIsLoading(true)

    fetchImages(imageName, page).then((images) => {
     
      if (images.totalHits === 0) {
        setIsLoading(false)
        toast.error('Sorry, there are no images matching your search query. Please try again.')
     return
        
      } else {
        setimageArray([...imageArray, ...images.hits]);
        setStatus("resolved");
      }
    }).finally(() => setIsLoading(false));
  }, 
  // eslint-disable-next-line 
  [imageName, page]);   

  const handleFormSubmit = (formImageName) => {
    if(formImageName === imageName) {
      return
    }
    setImagename(formImageName);
    setimageArray([]);
    setPage(1);
    setStatus("");
  };

  const updatePage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  
const shouldRenderLoadMoreBtn = imageArray.length > 0 && !isLoading

  return (
    <div className={css.App}>
  <Searchbar onFormSubmit={handleFormSubmit} />
  {status === "resolved" && (<ImageGallery images={imageArray}/>)}
  {isLoading && <Loader/>}
  {shouldRenderLoadMoreBtn && (<Button updatePage={updatePage}/>)}
  <ToastContainer autoClose={2500} />
    </div>
  );
};

//