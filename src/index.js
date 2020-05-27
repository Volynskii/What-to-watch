import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {smallCards} from './mocks/films'
const init = (gameQuestions) => {
  const settings = {
    gameGenre: '10110101010'
  }

ReactDOM.render(
<App
gameGenre={settings.gameGenre}
smallCardsData={gameQuestions}
/>,
  document.querySelector('#root'),
);
}
init(smallCards)
console.log(smallCards)
