const theme = window.matchMedia('(prefers-color-scheme: dark)');
const lightFavicon = document.getElementById('favicon-light');
const darkFavicon = document.getElementById('favicon-dark');

 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
     document.documentElement.className = themeName;
     
     if (themeName === 'theme-dark') {
        lightFavicon.href = '/lightFavIcon.svg';
        darkFavicon.href = '/darkFavIcon.svg';
     
    } else {
        lightFavicon.href = '/darkFavIcon.svg';
        darkFavicon.href = '/lightFavIcon.svg';
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