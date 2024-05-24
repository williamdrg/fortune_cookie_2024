import { useState, useEffect } from 'react';

const SoundControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      const audioElement = document.getElementById('background-music');
      audioElement.play();
      setIsPlaying(true);
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  const togglePlayPause = () => {
    const audioElement = document.getElementById('background-music');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
     <div className="sound-control">
      <audio id="background-music" loop>
        <source src="/fondo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <input type="checkbox" id="checkboxInput"  onClick={togglePlayPause}/>
      <label htmlFor="checkboxInput" className="toggleSwitch">
        <div className="speaker">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
            <path
              d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
              style={{ stroke: '#fff', strokeWidth: 5, strokeLinejoin: 'round', fill: '#fff' }}
            ></path>
            <path
              d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
              style={{ fill: 'none', stroke: '#fff', strokeWidth: 5, strokeLinecap: 'round' }}
            ></path>
          </svg>
        </div>
        <div className="mute-speaker">
          <svg version="1.0" viewBox="0 0 75 75" stroke="#fff" strokeWidth="5">
            <path
              d="m39,14-17,15H6V48H22l17,15z"
              fill="#fff"
              strokeLinejoin="round"
            ></path>
            <path
              d="m49,26 20,24m0-24-20,24"
              fill="#fff"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </label>
    </div>
  );
};

export default SoundControl;

/*   <div className="sound-control">
      <audio id="background-music" loop>
        <source src="/fondo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pausar Música' : 'Reproducir Música'}
      </button>
    </div> */
