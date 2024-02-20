nodejs
20.11.1 LTS
https://nodejs.org/en

brew install node
brew install yarn --ignore-dependencies
brew upgrade

yarn global add create-react-app
npx create-react-app react-project

sudo chown -R 501:20 "/Users/mutjin08/.npm"
npm cache clear --force
rm -rf node_modules
rm package-lock.json
npm install
npm audit fix --force


react 할때는 yarn을 사용한다

<h1>vscode extensions</h1>
Simple React Snippets - Burke Holland

<h1>myapp-router</h1>
npx create-react-app myapp-router
cd myapp-router
npm install react-router-dom
npm install bootstrap
yarn start

<h1>myhome</h1>
npx create-react-app myhome
cd myhome
npm install bootstrap
npm install react-router-dom