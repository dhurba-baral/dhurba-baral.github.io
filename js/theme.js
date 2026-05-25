(function () {
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        var next = current === 'light' ? 'dark' : 'light';
        if (next === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        try { localStorage.setItem('theme', next); } catch (e) {}
        toggle.setAttribute('aria-label', next === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    });
})();
