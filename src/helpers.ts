export function deselectDesktopIcons() {
    document
        .querySelectorAll('.desktop-icon')
        .forEach((el) => el.classList.remove('selected'));
}
