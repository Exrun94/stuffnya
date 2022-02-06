## Important

- **Due to not yet resolved issue with Webpack, run the below command from the project root before running ```npm start```  for first time**
```
mv  src/renderer/quill.global.css node_modules/react-quill/dist && mv src/renderer/toast.global.css node_modules/react-toastify/dist/
```
<br>


## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Docs

See our [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation)

