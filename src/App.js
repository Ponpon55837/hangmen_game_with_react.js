import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Notification from './components/Notification'
import Popup from './components/Popup'
import { showNotification as show } from './helpers/helpers'

const App = () => {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setshowNotification] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } =event
      // 如果playable = true 且 keyCode 大於等於 65 且 小於等於 90
  		if (playable && keyCode >= 65 && keyCode <= 90) {
        // 把letter都改為小寫
  			const letter = key.toLowerCase()
        // 如果selectedWord抓到words陣列中文字確實存在的話
  			if (selectedWord.includes(letter)) {
          // 如果不是正確的文字
  				if (!correctLetters.includes(letter)) {
            // 這邊currentLetters只是用來暫存文字的一個變數
            setCorrectLetters(currentLetters => [...currentLetters, letter])
  				} else {
  					show(setshowNotification)
  				}
  			} else {
  				if (!wrongLetters.includes(letter)) {
  					setWrongLetters(currentLetters => [...currentLetters, letter])
  				} else {
  				  show(setshowNotification)
  				}
  			}
  		}
  	}
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [correctLetters, wrongLetters, playable])

  const playAgain = () => {
    setPlayable(true)

    setCorrectLetters([])
    setWrongLetters([])

    const random = Math.floor(Math.random() * words.length)
    selectedWord = words[random]
  }

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  )
}

const words = ['application', 'programming', 'interface', 'wizard']

// selectedWord會隨機選擇words裡面文字，並且顯示文字的長度
let selectedWord = words[Math.floor(Math.random() * words.length)]

export default App
