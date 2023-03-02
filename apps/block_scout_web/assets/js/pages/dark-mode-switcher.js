import Cookies from 'js-cookie'
// @ts-ignore
const permanentDarkModeEnabled = document.getElementById('permanent-dark-mode').textContent === 'true'
// @ts-ignore
const darkModeChangerEl = document.getElementsByClassName('dark-mode-changer')[0]

if (permanentDarkModeEnabled) {
  // @ts-ignore
  darkModeChangerEl.style.display = 'none'
}

darkModeChangerEl.addEventListener('click', function () {
  if (!permanentDarkModeEnabled) {
    if (Cookies.get('chakra-ui-color-mode') === 'dark') {
      Cookies.set('chakra-ui-color-mode', 'light')
    } else {
      Cookies.set('chakra-ui-color-mode', 'dark')
    }
    document.location.reload()
  }
})