# remix-ide

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

## Deploy
1. download and build [plugin-one][plugin-one]
2. download and build [remix-ide][remix-ide]
3. create a empty dir for deploy `mkdir remixide`
4. `cp -rf plugin-one/dist remixide/plugin`
5. `cp -rf remix-ide/index.html remix-ide/index.html remix-ide/favicon.ico remix-ide/favicon.ico  remix-ide/assets  remix-ide/build remixide/`
6. Place the `remixide` in the site root


[plugin-one]: https://github.com/peekpi/pluginone.git
[remix-ide]: https://github.com/ethereum/remix-ide.git