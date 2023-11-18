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

## Configuración

- Crear un proyecto usando la plantilla Net con ReactJS en VS 2022
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

## Referencias

- [Net-React-TypeScript-Template](https://bradshawdotnet.hashnode.dev/net-react-typescript-template)

## Acerca de
