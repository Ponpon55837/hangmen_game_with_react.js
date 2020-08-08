import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word">
      {
        // 當selectedWord選到文字之後，在Word.js裡面將文字分割進行map，同時correctLetters陣列中必須有文字，否則清空correctLetters陣列
        selectedWord.split('').map( (letter, i) => (
          <span className='letter' key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      )}
    </div>
  )
}

export default Word
