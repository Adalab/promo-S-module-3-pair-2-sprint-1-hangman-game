import { useState } from 'react';
import '../scss/main.scss';


function App() { 
  const [numberOfErrors, setNumberOfErrors] = useState (0);
  const [lastLetter, setLastLetter] = useState ('');
  const pattern = new RegExp('^[A-Z]+$', 'i');
  
  const handleClickBtn = (ev) => {
  ev.preventDefault();
    setNumberOfErrors (numberOfErrors+1);
  }
  const handleChangeLetter =(ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    let isValid = false;
    
    setLastLetter(inputValue);
    if(!inputValue) {
      isValid = false;
  
    }
    else if {
      (!pattern.test(inputValue))
      isValid = false;
    }
    else {
      isValid = true;
    }
     return isValid;
     console.log(isValid);

  
    

  }


  return <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
        <button onClick={handleClickBtn}>Incrementar</button>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autocomplete="off"
              className="form__input"
              maxlength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleChangeLetter}
              value={lastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>;
}

export default App;
