const theme = window.matchMedia('(prefers-color-scheme: dark)');
const lightFavicon = document.getElementById('favicon-light');
const darkFavicon = document.getElementById('favicon-dark');

 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
     document.documentElement.className = themeName;
     
     if (themeName === 'theme-dark') {
        lightFavicon.href = '/public/lightFavIcon.svg';
        darkFavicon.href = '/public/darkFavIcon.svg';
     
    } else {
        lightFavicon.href = '/public/darkFavIcon.svg';
        darkFavicon.href = '/public/lightFavIcon.svg';
    }
}

export function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

export function getTheme() {
    if(theme.matches === true) {
        setTheme('theme-dark');
        document.getElementById('slider').checked = true;
    }else {
        setTheme('theme-light');
        document.getElementById('slider').checked = false;
    }
}