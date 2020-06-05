const googleApps = document.getElementById('google-apps');
const googleAppsWindow = document.getElementById('google-apps-window');

googleApps.addEventListener('mouseup', showHide);

function showHide() {
    if(googleAppsWindow.style.visibility === 'visible') {
        googleAppsWindow.style.visibility = 'hidden';
    } else {
        googleAppsWindow.style.visibility = 'visible';
    }
}
