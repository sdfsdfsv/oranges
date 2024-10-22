// colorscheme.js
let switchHandle = document.querySelector('#switch-color-scheme')
let themeIcon = document.querySelector('#theme-icon')
var html = document.documentElement

function getPreferredTheme() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return darkModeMediaQuery.matches ? 'dark' : 'light';
}

const switchMode = () => {
    let attr = html.getAttribute('color-mode')
    let colorMode = ''
    if (attr === 'light') {
        themeIcon.classList = 'iconfont icon-sun'
        colorMode = 'dark'
    } else {
        themeIcon.classList = 'iconfont icon-moon'
        colorMode = 'light'
    }

    if (getPreferredTheme() == colorMode){
        localStorage.removeItem('color-mode');
    }
    else
        localStorage.setItem('color-mode', colorMode)

    html.setAttribute('color-mode', colorMode)

}

switchHandle.addEventListener('click', switchMode, false)

function getTheme(){
    var html = document.documentElement
    const colorMode = localStorage.getItem('color-mode')
    if (colorMode) {
      return colorMode
    }
    function getPreferredTheme() {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        return darkModeMediaQuery.matches ? 'dark' : 'light';
    }
      return getPreferredTheme();
}
const currColorMode = getTheme()
html.setAttribute('color-mode', currColorMode)
if (currColorMode === 'light') {
    themeIcon.classList = 'iconfont icon-moon'
} else {
    themeIcon.classList = 'iconfont icon-sun'
}
