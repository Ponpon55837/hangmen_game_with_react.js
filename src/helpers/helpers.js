export const showNotification = (setter) => {
  setter(true)
  setTimeout(() => {
    setter(false)
  }, 2000)
}

export const checkWin = (correct, wrong, word) => {
  let status = 'win'

  // 判斷是否獲勝
  word.split('').forEach(letter => {
    if(!correct.includes(letter)) {
      status = ''
    }
  })

  // 判斷是否失敗
  if(wrong.length == 6) {
    status = 'lose'
  }

  return status
}
