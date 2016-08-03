# universal-es6-redux-react-semantic
A sane and working boilerplate for univeral redux/react apps leveraging Semantic UI in ES6 by [Chris Abouabdo](https://github.com/christopherabouabdo) and [Rudy Chaney](https://github.com/rudeluv) @ [FOODBEAST](https://github.com/Foodbeast)

## Getting Started
For you impatient folks here's how to get started. We recommend reading below to understand things more, but sometimes you just want the goods ASAP.

Clone the repo:
```
$ git clone https://github.com/Foodbeast/universal-es6-redux-react-semantic.git
````

Install packages:

```
$ npm install
```
**Note: When Semantic UI asks to install, you should just skip install unless you want to overwrite the semantic.json config we're using**

Run Semantic UI build scripts:

```
$ grunt build
```

Pack and Run!

```
$ npm start
```

## Features
- ES6 with Babel
- Server-side rendering with Express
- Head tag management with Helment
- State management with Redux
- Component interfaces with React
- Component styling and structure with Semantic UI

## General Philosophy
1. Connect easily with REST services
2. Use containers to adapt the state into their matching components
3. Components can contain other components or containers
4. Update <head> with proper tags based on app state


## Structure
#### Project
- **app**/ -- *our application api*
- app/**actions**/ -- *component actions*
- app/**components**/ -- *dumb components*
- app/**containers**/ -- *redux containers*
- app/**reducers**/ -- *state reducers*
- **client**/ -- *client entry point for the app*
- node_modules
- **semantic*/ -- *root for Semantic UI*
- **server*/ -- *server entry point for the app*
- **static*/ -- *static root for css/js*

#### Components
- App Component
  - Head HTML Container
  - Router
    - Layout Component
      - Page Container
        - Page Component
          - ... more containers and components

## Contributing
Feel free to create issues and submit PRs.


