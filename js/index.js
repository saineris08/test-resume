document.addEventListener('DOMContentLoaded', () => {
    let btn_theme = document.getElementById('btn_th');

    btn_theme.addEventListener('click', () => {
        document.body.classList.toggle('dark_theme');
        if (document.body.classList.contains('dark_theme')) {
            btn_theme.textContent = 'Светлая';
        } else {
            btn_theme.textContent = 'Темная';
        }
    });
});
