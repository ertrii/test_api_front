React Template
====================

### <a>Install</a>

```
git clone https://github.com/Aventura-Tech/React_Template.git
```

```
npm install
```

Create `.env` files and write this. For the moment is not required a value for this
```
API_BASE_URL=
```

```
npm start
```

Login
```
username: admin
password: 123456
```

### <a>Structure</a>


```
|- .vscode
|- build-utils
|   |- webpack.development.js
|   |- webpack.production.js
|- config
|   |- App.js
|   |- Config.style.js
|   |- setupTests.js
|- src
|   |- App
|   |   |- index.jsx
|   |   |- Register.js
|   |   |- Route.jsx
|   |- Assets
|   |   |- img
|   |   |- fonts
|   |- Components
|   |   |- Loading
|   |   |   |- index.jsx
|   |   |   |- Loading.style.js
|   |   |- Layout
|   |   |   |- index.jsx
|   |   |   |- Layout.style.js
|   |- Pages
|   |   |- Session
|   |   |   |- index.jsx
|   |   |   |- Model
|   |   |   |   |- index.js
|   |   |   |   |- listen.js
|   |   |   |   |- init.js
|   |   |   |   |- fail.js
|   |   |   |- Session.style.js
|   |   |- Home
|   |   |   |- index.jsx
|   |   |   |- Model
|   |   |   |   |- index.js
|   |   |   |   |- listen.js
|   |   |   |   |- init.js
|   |   |   |   |- fail.js
|   |   |   |- Home.style.js
|- test
|   |- Components
|   |   |- Loading.test.jsx
|   |- Pages
|   |   |- Home.test.js
|- .env
|- webpack.config.js
|- .babelrc
|- .htaccess
```

### <a>Scripts</a>

| command | description |
|---------|-------------|
| `npm start` | Open server in port 8080 |
| `npm run build` | Build project mode production in `/public` |
| `npm run watch` | Build project mode development in `/public` and recompile whenever they change |
| `npm run lint` | Linter Standard |
| `npm run test` | Run testing for directory `/test` |
| `npm run test:watch` | Run testing for directory `/test` and watching the changes |

### <a>Configure Build</a>

You can see the directory `/build-utils`. For develop and production
```
|- build-utils
|   |- webpack.development.js
|   |- webpack.production.js
```

### <a>Route</a>

In `/src/App/Route.jsx` you can to configure the rutes `private` and `public`

```jsx
/**
 * Public Routes, only visible when there is no session
 */
const Public = () => {
  return (
    <Router>
      <Session path='/' />
    </Router>
  )
}

/**
 * Private Routes, only visible when there a session
 */
const Private = () => {
  return (
    <Router>
      <Home path='/' />
    </Router>
  )
}
```

Is recommendable use `lazy` for import yours pages.

```js
const Home = lazy(() => import('../Pages/Home'))
const Session = lazy(() => import('../pages/Session'))
```

### <a>Register Model</a>

In `/src/App/Register.js` you can register yours models for each Pages

```
|- Pages
|   |- Session
|   |   |- index.jsx
|   |   |- Model
|   |   |   |- index.js
|   |   |   |- listen.js
|   |   |   |- init.js
|   |   |   |- fail.js
|   |   |- Session.style.js
|   |- Home
|   |   |- index.jsx
|   |   |- Model
|   |   |   |- index.js
|   |   |   |- listen.js
|   |   |   |- init.js
|   |   |   |- fail.js
|   |   |- Home.style.js
```

```js
import Redity from 'redity'
import Session from '../Pages/Session/Model'
import Home from '../Pages/Home/Model'
// Register your models
Redity.register('session', Session)
Redity.register('home', Home)

export default Redity
```

### <a>Configuration</a>

Configuration Globals of the App. You can to create more configurations and styles too.

```
|- config
|   |- App.js
|   |- Config.style.js
```

### <a>Session</a>

Configure Session connecting to any API

```
|- Pages
|   |- Session
|   |   |- index.jsx
|   |   |- Model
|   |   |   |- index.js
|   |   |   |- listen.js
|   |   |   |- init.js
|   |   |   |- fail.js
|   |   |- Session.style.js
```

`response`

```
access_token: "token"
created_at: 1578892347
expire_in: 1578902346
```

`payload`

```js
{
  username: 'string',
  passoword: 'string'
}
```

`Session/Model/listen.js`

```js
const res = await API.post('/login', payload)
const expireIn = res.data.result.expire_in - res.data.result.created_at // Time Total for expire (s)
const access_token = res.data.access_token
```

Don't forget `API_BASE_URL` of `.env`

```
API_BASE_URL=http://MyAPi.com/api
```

### <a>Testing</a>

Testing for the pages and components

```
|- test
|   |- Components
|   |   |- Loading.test.jsx
|   |- Pages
|   |   |- Home.test.js
```

Don't forget import `Register` for your testing pages.

```jsx
import React from 'react'
import { create } from 'react-test-renderer'
import '../../src/App/Register' // this
import Home from '../../src/Pages/Home'

describe('Home', () => {
  it('First Test', () => {
    const root = create(<Home />).root
    const h1 = root.findByType('h1')
    const p = root.findByType('p')
    expect(h1.children[0]).toBe('Welcome')
    expect(p.children[0]).toBe('Template vs. 1.0.0')
  })
})
```

### <a>Extensions for VSCode recommended</a>

* Jest
* Prettier
* EsLint
* vscode-styled-components

### <a>Links</a>

* [React: 5 consejos sencillos para reducir el tamaño del bundle principal](https://medium.com/@ger86/react-5-consejos-sencillos-para-reducir-el-tama%C3%B1o-del-bundle-principal-ef42f91e5031)
* [TDD with React Test Renderer - LogRocket Blog](https://blog.logrocket.com/tdd-with-react-test-renderer/)
* [💅 styled components 💅 — Production Patterns - Jamie Dixon - Medium](https://medium.com/@jamiedixon/styled-components-production-patterns-c22e24b1d896)
* [How to remove console.log (or custom debug functions) from production builds with Webpack \| Our Code World](https://ourcodeworld.com/articles/read/389/how-to-remove-console-log-or-custom-debug-functions-from-production-builds-with-webpack)
* [Loading Fonts with webpack](https://chriscourses.com/blog/loading-fonts-webpack)
* [GitHub - jantimon/html-webpack-plugin: Simplifies creation of HTML files to serve your webpack bundles](https://github.com/jantimon/html-webpack-plugin)
* [Production PWA webpack setup](https://vaadin.com/learn/tutorials/learn-pwa/production-pwa-webpack-setup)
* [Webpack: Configurando nuestra primera build \| el.abismo = de[null]](https://elabismodenull.wordpress.com/2017/06/22/webpack-configurando-nuestra-primera-build/)
* [GitHub - gaearon/react-hot-loader: Tweak React components in real time.](https://github.com/gaearon/react-hot-loader)
* [Using dotenv with Jest - Florian Hämmerle - Medium](https://medium.com/@lusbuab/using-dotenv-with-jest-7e735b34e55f)
* [GitHub - webpack-contrib/copy-webpack-plugin: Copy files and directories with webpack](https://github.com/webpack-contrib/copy-webpack-plugin)
* [Workbox webpack Plugins  \|  Google Developers](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)