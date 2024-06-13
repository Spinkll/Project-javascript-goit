const theme = window.matchMedia('(prefers-color-scheme: dark)');

 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
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
    console.log(theme.matches);
}