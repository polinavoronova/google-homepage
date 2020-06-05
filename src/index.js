const googleApps = document.getElementById('google-apps');
const googleAppsWindow = document.getElementById('google-apps-window');

const googleSettings = document.getElementById('google-settings');
const googleSettingsWindow = document.getElementById('settings-window');

const body = document.getElementById('body');

googleApps.addEventListener('click', function(event){
    event.stopPropagation();
    googleSettingsWindow.style.visibility = 'hidden';

    if(googleAppsWindow.style.visibility === 'visible') {
        googleAppsWindow.style.visibility = 'hidden';
    } else {
        googleAppsWindow.style.visibility = 'visible';
        body.addEventListener('click', closeTabs);
    }
});

googleSettings.addEventListener('click', function(event) {
    event.stopPropagation();
    googleAppsWindow.style.visibility = 'hidden';

    if(googleSettingsWindow.style.visibility === 'visible') {
        googleSettingsWindow.style.visibility = 'hidden';
    } else {
        googleSettingsWindow.style.visibility = 'visible';
        document.getElementsByClassName('footer-menu__link')[6].style.color = '#5f6368';
        document.getElementsByClassName('footer-menu__link')[6].style.textDecoration = 'none';
        body.addEventListener('click', closeTabs);
    }
});

function closeTabs(event) {
    if(!event.target.classList.contains('google-apps-window__collection') && event.target.id != 'settings-window') {
        googleAppsWindow.style.visibility = 'hidden';
        googleSettingsWindow.style.visibility = 'hidden';
    }
}
