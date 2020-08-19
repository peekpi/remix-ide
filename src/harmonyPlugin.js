import { IframePlugin } from '@remixproject/engine'
class ExtendPlugin extends IframePlugin {
    constructor(url='http://localhost/plugin/index.html', location='sidePanel'){
        super({
            icon: 'assets/img/harmony.webp',
            name: 'harmonyDeploy',
            location,
            url,
            hash: 'local-harmony'
        });
    }
}

export function harmonyInit(engine, manager){
    const extPlugin = new ExtendPlugin();
    const name = engine.register(extPlugin);
    return manager.activatePlugin(name);
}
