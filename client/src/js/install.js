const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        console.log('User dismissed the install package')
        return;
    }
    console.log('User accepted the install package');
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
    

        if (choiceResult.outcome === 'accepted') {
            
    }
});

window.addEventListener('appinstalled', (event) => {
    console.log('Package successfully installed')
    window.deferredPrompt = null;
});