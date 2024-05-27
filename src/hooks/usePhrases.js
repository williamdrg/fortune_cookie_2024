import { useState, useEffect } from 'react';
import phrasesData from '../utils/phrases.json';
import { BACKGROUND_IMAGES } from '../constants';

/**
 * Función para gestionar las frases y el estado de la aplicación.
 * 
 * @returns {object} El estado y funciones para gestionar frases, favoritos y el comportamiento de la aplicación.
 */
const usePhrases = () => {
  const initialPhrases = JSON.parse(localStorage.getItem('phrases')) || phrasesData;

  const [phrases, setPhrases] = useState(initialPhrases);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [categories, setCategories] = useState([...new Set(phrasesData.map(p => p.category)), 'all']);
  const [state, setState] = useState({
    index: 0,
    backgroundIndex: 0,
    isVisible: true,
    showFavorites: false,
    confirmationMessage: '',
    category: 'all',
    isModalOpen: false,
    isFavoritesModalOpen: false,
    isAddFavoriteModalOpen: false,
    addFavoriteMessage: ''
  });

  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(phrases));
  }, [phrases]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    BACKGROUND_IMAGES.forEach(image => {
      const img = new Image();
      img.src = image.slice(4, -1).replace(/"/g, "");
    });
  }, []);

  const filteredPhrases = state.category === 'all'
    ? phrases
    : phrases.filter(phrase => phrase.category === state.category);

    
  /**
   * Cambia el índice de la frase y la imagen de fondo mostrada.
   */
  const changeIndex = () => {
    setState(prevState => ({
      ...prevState,
      index: Math.floor(Math.random() * filteredPhrases.length),
      backgroundIndex: Math.floor(Math.random() * BACKGROUND_IMAGES.length),
      isVisible: !prevState.isVisible
    }));
  };

  /**
   * Añade la frase actual a los favoritos.
   */
  const addFavorite = () => {
    const newFavorite = filteredPhrases[state.index];
    if (!favorites.some(fav => fav.phrase === newFavorite.phrase)) {
      setFavorites([...favorites, newFavorite]);
      setState(prevState => ({
        ...prevState,
        isAddFavoriteModalOpen: true,
        addFavoriteMessage: '¡Frase añadida a favoritos!'
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        isAddFavoriteModalOpen: true,
        addFavoriteMessage: 'Esta frase ya está en tus favoritos.'
      }));
    }
  };

  /**
   * Cierra el modal de confirmación de añadido a favoritos.
   */
  const closeAddFavoriteModal = () => {
    setState(prevState => ({ ...prevState, isAddFavoriteModalOpen: false }));
  };

  /**
   * Elimina una frase de los favoritos.
   * 
   * @param {string} phraseToRemove - La frase que se desea eliminar de los favoritos.
   */
  const removeFavorite = (phraseToRemove) => {
    const newFavorites = favorites.filter(fav => fav.phrase !== phraseToRemove);
    setFavorites(newFavorites);
  };

  /**
   * Alterna la visibilidad del modal de favoritos.
   */
  const toggleShowFavorites = () => {
    setState(prevState => ({ ...prevState, isFavoritesModalOpen: !prevState.isFavoritesModalOpen }));
  };

   /**
   * Añade una nueva frase a la lista de frases.
   * 
   * @param {Object} newPhrase - La nueva frase que se desea añadir.
   * @param {string} newPhrase.phrase - El texto de la frase.
   * @param {string} newPhrase.author - El autor de la frase.
   * @param {string} newPhrase.category - La categoría de la frase.
   */
  const addPhrase = (newPhrase) => {
    const newPhrases = [...phrases, newPhrase];
    setPhrases(newPhrases);
    setState(prevState => ({ ...prevState, confirmationMessage: 'Frase añadida correctamente!' }));

    if (!categories.includes(newPhrase.category) && typeof newPhrase.category === 'string') {
      setCategories([...categories, newPhrase.category]);
    }

    setTimeout(() => {
      setState(prevState => ({ ...prevState, confirmationMessage: '' }));
    }, 3000);
  };

   /**
   * Cambia la categoría de las frases mostradas.
   * 
   * @param {string} category - La categoría que se desea establecer.
   */
  const changeCategory = (category) => setState(prevState => ({ ...prevState, category, index: 0 }));
  const openModal = () => setState(prevState => ({ ...prevState, isModalOpen: true }));
  const closeModal = () => setState(prevState => ({ ...prevState, isModalOpen: false }));

  useEffect(() => {
    if (!state.isVisible) {
      const timer = setTimeout(() => {
        setState(prevState => ({ ...prevState, isVisible: true }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.isVisible]);

  return {
    state,
    phrases,
    favorites,
    categories,
    filteredPhrases,
    changeIndex,
    addFavorite,
    closeAddFavoriteModal,
    removeFavorite,
    toggleShowFavorites,
    addPhrase,
    changeCategory,
    openModal,
    closeModal
  };
};

export default usePhrases;

