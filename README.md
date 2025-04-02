# React + Vite + Storybook

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- [storybook](https://storybook.js.org/docs)

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## scripts
```
// run
rm -rf node_modules/.cache/storybook && npm run storybook


```


## initialization
```
npx create-vite my-project --template react
cd my-project
npm install

npx storybook@latest init
npm run storybook

npm install antd
npm install @emotion/react

npm run storybook 👉🏻👉🏻👉🏻👉🏻👉🏻 bootstrap
```

💡 Why @emotion/react？
Storybook + Vite use @emotion/react to process CSS，which is also required by Ant Design for CSS compatibility
