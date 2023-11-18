# Aplicación de recordatorios

Aplicación creada con ReactJs, Net Core 5, TailwindCSS y TypeScript.

`Esta aplicación fue realizada con fines de aprendizaje, la integración
de ReactJS 18 sobre net core 5 podría traer bugs desconocidos.`

## Requerimientos

- ReactJS >=16
- Net Core = 5
- Nodejs 'LTS'
- TypeScript >= 4.9
- TailwindCSS ~3.3
- React-router-dom ~6.19

## Configuración

- Crear un proyecto usando la plantilla Net con ReactJS en VS 2022
- (opcional) Si se quiere usar un control de versiones sobre todo el proyecto en general, antes de eliminar app, crear un repositorio local desde la carpeta del proyecto.
- Eliminar la carpeta ClientApp
- Si queremos usar TypeScript, podemos ejecutar el siguiente
  comando con la opción template dentro del directorio donde antes
  estaba ClientApp

```bash
# El nombre ClientApp se remplazo por client-app por razones del gestor npm
$ npx create-react-app client-app --template typescript
```

- Editar el archivo del proyecto _.csproj_ en mi caso (My-reminder.csproj)

```csharp
// En propertygroup cambiar el nombre del spa a client-app
// antes
  <SpaRoot>ClientApp\</SpaRoot>
// después
  <SpaRoot>client-app\</SpaRoot>
```

- Editar el archivo Startup.cs

```csharp
// Cambiar todas las apariciones de ClientApp por client-app
// antes
  spa.Options.SourcePath = "client-app";
  configuration.RootPath = "client-app/build";
// después
  spa.Options.SourcePath = "client-app";
  configuration.RootPath = "client-app/build";
```

- Instalar _ts-node_ y _@types/node_ en modo desarrollo

```bash
# Ejecutar dentro del directorio client-app
$ npm i ts-node @types/node -D
```

- Cambiar _ES5_ a _ES6_ y _esnext_ en _tsconfig.json_

```json
"target": "es6",
"module": "esnext",
```

### Iniciar la aplicación desde VS 2022 usando IIS Express

## Si la aplicación no funciona

Agregar la opción _module_ a _package.json_

```json
"type": "module"
```

Verificar la instalación de _NodeJS_

Verificar el _PATH_ del sistema _(nodejs, npm, npx, etc)_

Reiniciar _Visual Studio 2022_

## Instalación de TailwindCSS

`Ejecutar todos los comandos dentro del directorio client-app`

- [Seguir los pasos de la doc oficial hasta el punto 4](https://tailwindcss.com/docs/guides/create-react-app)

- Eliminar el archivo _App.css_

- Eliminar el contenido de _index.css_

- Agregar los siguientes estilos generales a _index.css_

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}
```

- Agregar algunas clases a App.tsx

```typescript
import logo from './logo.svg';

function App() {
  return (
    <div className="bg-gray-900 flex h-screen items-center justify-center">
      <header className="flex flex-col gap-2 text-white text-center">
        <img src={logo} className="w-64 h-64" alt="logo" />
        <p>Mi aplicación</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Con React y TypeScript
        </a>
      </header>
    </div>
  );
}

export default App;
```

Resultado:

![preview](docs-imgs/previewTWworking.png)

- Reiniciar la aplicación desde VS 2022

## Instalar React-Router-Dom v6

- Instalar usando la documentación oficial

```bash
$ npm i react-router-dom
```

- Crear la carpeta components dentro de src y agregar

  - About.tsx
  - Contact.tsx
  - Home.tsx
  - Navbar.tsx
  - Repo.tsx

- Crear el componente _Navbar.tsx_ para pruebas

```tsx
import { NavLink } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <ul className="flex items-center justify-center gap-4 border-b h-14">
      <li>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            [
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            ].join(' ')
          }
        >
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            [
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            ].join(' ')
          }
        >
          Contacto
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            [
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            ].join(' ')
          }
        >
          Acerca de
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/repo'}
          className={({ isActive }) =>
            [
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            ].join(' ')
          }
        >
          Repositorio
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
```

- Escribir el siguiente código en App.tsx

```tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Repo from './components/Repo';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/repo" element={<Repo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Verificamos el funcionamiento, si por alguna razón no funciona, reiniciamos el proyecto debido a la instalación de react-router-dom

Resultado:

![PreviewReactRouter](docs-imgs/reactRouterTest.png)

## Referencias

- [Net-React-TypeScript-Template](https://bradshawdotnet.hashnode.dev/net-react-typescript-template)

- [TailwindCSS using Create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

## Acerca de
