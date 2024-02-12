import { useState } from "react";
import "./App.css";

const noPhrases = [
  "no",
  "this is the no button silly...",
  "wait please im begging",
  "wtf you don't wanna be my valentines?",
  "grrr...pick the other one",
  "GRRRRR...IM NOT GONNA BEG...",
  "PLEASEPLEASEPLEASEPLEASEPLEASEPLEASEPLEASEPLEASE",
  "IM BEGGING PLEASE IM ON MY HANDS AND KNEES",
  "WHAT DO YOU WANT A CONFESSION OF LOVE?",
  "IT WONT HAPPEN...",
  "I LOVE YOU SO MUCH MY BEAUTIFUL MISHTI THE MOST PERFECT GIRL EVER I LOVE YOU ENDLESSLY PLEASE SAY YES MY LOVE I BEG",
  "PLSPLSPLSPLSPLSPLSPLS",
];

const yesPhrases = [
  "YES",
  "WAIT REALLY?",
  "YOU REALLY REALLY MEAN IT?",
  "sorry...i gots the potential anxiety confirm again?",
  "REALLY REALLY REALLY MEAN IT???",
  "once more >.< ?"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesCount, setYesCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false);
  const [preYesPressed, setPreYesPressed] = useState(false);
  const yesButtonSize = noCount * 19 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function handleYesClick(){
    if (yesCount < yesPhrases.length - 1){
      setYesCount(yesCount + 1);
      setPreYesPressed(true)
    } else {
      setYesPressed(true);
    }
  }

  function getNoButtonText() {
    return noPhrases[Math.min(noCount, noPhrases.length - 1)];
  }

  function getYesButtonText(){
    return yesPhrases[Math.min(yesCount, yesPhrases.length - 1)]
  }

  return (
      <div className="valentine-container">
        {yesPressed ? (
            <>
              <img
                  alt="kittycat"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2pqaTRzcWRuNDA5cHRnN3ZhcHZzYzV2MjBqZ2h0dHp0dnBxdDY4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qFmdpUKAFZ6rMobzzu/giphy.gif"
              />
              <div className="thankgod">YAYYYYYYY YIPPEEEEEE YIPPPEEEEEEEEEE!!!!!!!!!!!!</div>
            </>
        ) : (
            <>
              <img
                  alt="kittycat2"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2N3OXFnMGcwc2Z1OHIxemNnNWxwY3l4OXBkdTM0c2N6aGVqd2FyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vRwmQ4az7ugWk/giphy-downsized-large.gif"
              />
              <div className="question">will you be my valentine?</div>
              <div>
                <button
                    className="yesButton"
                    onClick={handleYesClick}
                    style={{ fontSize: yesButtonSize }}
                >
                  {getYesButtonText()}
                </button>
                <button onClick={handleNoClick} className="noButton">
                  {preYesPressed ? 'nvm' : getNoButtonText()}
                </button>
              </div>
            </>
        )}
      </div>
  );
}

export default App;
