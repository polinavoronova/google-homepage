const googleApps = document.getElementById('google-apps');
const googleAppsWindow = document.getElementById('google-apps-window');

const googleSettings = document.getElementById('google-settings');
const googleSettingsWindow = document.getElementById('settings-window');

googleApps.addEventListener('mouseup', function(){
    if(googleAppsWindow.style.visibility === 'visible') {
        googleAppsWindow.style.visibility = 'hidden';
    } else {
        googleAppsWindow.style.visibility = 'visible';
    }
});

googleSettings.addEventListener('mouseup', function() {
    if(googleSettingsWindow.style.visibility === 'visible') {
        googleSettingsWindow.style.visibility = 'hidden';
    } else {
        googleSettingsWindow.style.visibility = 'visible';
        document.getElementsByClassName('footer-menu__link')[6].style.color = '#5f6368';
        document.getElementsByClassName('footer-menu__link')[6].style.textDecoration = 'none';
    }
});
