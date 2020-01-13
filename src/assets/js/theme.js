const theming = (theme) => {
    const body = document.querySelector('body');
    window.localStorage.setItem('theme', theme);
    if ( theme === 'dark' ) {
        body.classList.remove('home-light','bg-light');
        body.classList.add('home-dark','bg-dark');
    } else if ( theme === 'light') {
        body.classList.remove('home-dark','bg-dark');
        body.classList.add('home-light','bg-light');
    }
}

export default theming;