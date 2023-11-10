export default function getViewportWidth(viewport){
    return window.matchMedia(`(max-width: ${viewport}px)`).matches;
}