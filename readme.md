nodejs
20.11.1 LTS
https://nodejs.org/en

brew install node
brew install yarn --ignore-dependencies
brew upgrade

yarn global add create-react-app
sudo npx create-react-app react-project

sudo chown -R 501:20 "/Users/mutjin08/.npm"
npm cache clear --force
rm -rf node_modules
rm package-lock.json
npm install
npm audit fix --force


react 할때는 yarn을 사용한다

<h1>vscode extensions</h1>
Simple React Snippets - Burke Holland
