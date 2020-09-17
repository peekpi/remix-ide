const profile = {
    name: 'home',
    displayName: 'Home',
    url: 'https://docs.harmony.one/home/developers/api',
    description: ' - ',
    icon: 'assets/img/remixLogo.webp',
    location: 'mainPanel'
};

import { IframePlugin } from '@remixproject/engine'
export class HomePlugin extends IframePlugin {
    constructor(url='plugin/index.html', location='sidePanel'){
        super(profile);
    }
}
