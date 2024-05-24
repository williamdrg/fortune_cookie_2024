import './App.css'
import Button from './components/Button'
import Message from './components/Message'
import FavoriteList from './components/FavoriteList'
import ShareButtons from './components/ShareButtons';
import AddPhrase from './components/AddPhrase';
import Modal from './components/Modal';
import phrasesData from './data/phrases.json';
import ThemeSelector from './components/ThemeSelector';
import CategorySelector from './components/CategorySelector';
import Footer from './components/Footer';
import { useState, useEffect } from 'react'


function App() {

  const backgroundImage = [ 
    "url(/font1.webp)", "url(/font2.webp)", "url(/font3.webp)", 
    "url(/font4.webp)", "url(/font5.webp)", "url(/font6.webp)",
    "url(/font7.webp)", "url(/font8.webp)"
  ]

  const initialPhrases = JSON.parse(localStorage.getItem('phrases')) || phrasesData;
  // localStorage.removeItem('phrases');

  const [state, setState] = useState({ 
    index: 0, 
    indexa: 0, 
    isVisible: true,
    phrases: initialPhrases,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    showFavorites: false,
    confirmationMessage: '',
    category: 'all',
    isModalOpen: false,
    isFavoritesModalOpen: false
   });

   const [categories, setCategories] = useState([...new Set(phrasesData.map(p => p.category)), 'all']);

   const filteredPhrases = state.category === 'all'
   ? state.phrases
   : state.phrases.filter(phrase => phrase.category == state.category);

  const changeIndex = () => {
    setState(prevState => ({
      ...prevState,
      index: Math.floor(Math.random() * filteredPhrases.length),
      indexa: Math.floor(Math.random() * backgroundImage.length),
      isVisible: !prevState.isVisible
    }));
  };

  const addFavorite = () => {
    const newFavorite = filteredPhrases[state.index];
    const newFavorites = [...state.favorites, newFavorite];
    setState(prevState => ({ ...prevState, favorites: newFavorites }));
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (phraseToRemove) => {
    const newFavorites = state.favorites.filter(fav => fav.phrase !== phraseToRemove);
    setState(prevState => ({ ...prevState, favorites: newFavorites }));
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const toggleShowFavorites = () => {
    setState(prevState => ({ ...prevState, isFavoritesModalOpen: !prevState.isFavoritesModalOpen }));
  };

  const addPhrase = (newPhrase) => {
    const newPhrases = [...state.phrases, newPhrase];
  
    setState(prevState => ({ ...prevState, phrases: newPhrases,  confirmationMessage: 'Frase añadida correctamente!' }));
    localStorage.setItem('phrases', JSON.stringify(newPhrases));

    if (!categories.includes(newPhrase.category) && typeof newPhrase.category === 'string') {
      setCategories([...categories, newPhrase.category]);
    }
    
    setTimeout(() => {
      setState(prevState => ({ ...prevState, confirmationMessage: '' }));
    }, 3000);
  };

  const changeCategory = (category) => setState(prevState => ({...prevState, category, index: 0 }));
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

  return (
        <div className="App" style={{ backgroundImage: backgroundImage[state.indexa] }}>
          <div className="overlay">
            <div className='container-cookie'>
              <h1>GALLETAS DE LA <br /> FORTUNA</h1>
              <CategorySelector category={state.category} changeCategory={changeCategory} categories={categories} />
              <Message
                dataPhrase={filteredPhrases[state.index].phrase}
                dataAuthor={filteredPhrases[state.index].author}
                animation={state.isVisible ? 'card-cokie' : 'card-cokie card-cokie-show'}
              />
              <Button
                change={changeIndex}
                addFavorite={addFavorite}
                toggleShowFavorites={toggleShowFavorites}
                isVisible={state.isVisible ? 'btn-change' : 'btn-change btn-off'}
                createFhrase={openModal}
              />
              <ShareButtons phrase={filteredPhrases[state.index].phrase} />
              <AddPhrase isOpen={state.isModalOpen} addPhrase={addPhrase} onClose={closeModal} confirmMessage={state.confirmationMessage}/>
              {state.confirmationMessage && <div className="confirmation-message">{state.confirmationMessage}</div>}
              <ThemeSelector />
            </div>
        </div>
          <Modal isOpen={state.isFavoritesModalOpen} onClose={toggleShowFavorites}>
            <FavoriteList favorites={state.favorites} removeFavorite={removeFavorite} />
          </Modal>
          <Footer />
      </div>
  )
}

export default App