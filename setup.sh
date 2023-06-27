cd base-electron
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/ganeshkbhat/base-electron.git
git remote -v
git pull origin main
git checkout main
npm install --force
cd ..
cd base-tauri
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/ganeshkbhat/base-tauri.git
git remote -v
git pull origin main
git checkout main
npm install --force
cd ..
cd base-wails
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/ganeshkbhat/base-wails.git
git remote -v
git pull origin main
git checkout main
npm install --force
cd ..
cd binaries
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/ganeshkbhat/binaries.git
git remote -v
git pull origin main
git checkout main
npm install --force
cd ..
cd bridge-cordova
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/ganeshkbhat/bridge-cordova.git
git remote -v
git pull origin main
git checkout main
npm install --force
cd ..
cd bridge-express
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/ganeshkbhat/bridge-express.git
git remote -v
git pull origin main
git checkout main
npm install --force
cd ..
cd bridge-nativescript
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/ganeshkbhat/bridge-nativescript.git
git remote -v
git pull origin main
git checkout main
npm install --force
cd ..
cd bridge-reactnative
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/ganeshkbhat/bridge-reactnative.git
git remote -v
git pull origin main
git checkout main
npm install --force
cd ..
