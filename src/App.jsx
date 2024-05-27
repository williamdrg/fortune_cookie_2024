import './App.css';
import Button from './components/Button';
import Message from './components/Message';
import FavoriteList from './components/FavoriteList';
import ShareButtons from './components/ShareButtons';
import AddPhrase from './components/AddPhrase';
import Modal from './components/Modal';
import ThemeSelector from './components/ThemeSelector';
import CategorySelector from './components/CategorySelector';
import Footer from './components/Footer';
import SoundControl from './components/SoundControl';
import usePhrases from './hooks/usePhrases';
import { BACKGROUND_IMAGES } from './constants';

function App() {
  const {
    state,
    filteredPhrases,
    favorites,
    categories,
    changeIndex,
    addFavorite,
    closeAddFavoriteModal,
    removeFavorite,
    toggleShowFavorites,
    addPhrase,
    changeCategory,
    openModal,
    closeModal
  } = usePhrases();

  return (
    <div className="App" style={{ backgroundImage: BACKGROUND_IMAGES[state.backgroundIndex] }}>
      <div className="overlay">
        <div className='container-cookie'>
          <h1>¡DESCUBRE LO QUE LA FORTUNA TIENE PARA TI!</h1>
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
          <AddPhrase isOpen={state.isModalOpen} addPhrase={addPhrase} onClose={closeModal} confirmMessage={state.confirmationMessage} />
          <ThemeSelector />
          <SoundControl />
        </div>
      </div>
      <Modal isOpen={state.isFavoritesModalOpen} onClose={toggleShowFavorites}>
        <FavoriteList favorites={favorites} removeFavorite={removeFavorite} />
      </Modal>
      <Modal isOpen={state.isAddFavoriteModalOpen} onClose={closeAddFavoriteModal}>
        <p className='favorite-message'>{state.addFavoriteMessage}</p>
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
