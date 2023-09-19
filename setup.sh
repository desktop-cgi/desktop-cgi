cd base-electron
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/base-electron.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd base-tauri
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/base-tauri.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd base-wails
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/base-wails.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd binaries
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/binaries.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd bridge-cordova
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/bridge-cordova.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd bridge-express
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/bridge-express.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd bridge-vite-express
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/bridge-vite-express.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd bridge-nativescript
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/bridge-nativescript.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd bridge-reactnative
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/bridge-reactnative.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
cd cgi-js
git init
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/cgi-js/cgi-js.git
git remote -v
git pull origin main
git checkout main
npm install --force
npm update --force
cd ..
git remote -v
git remote remove main
git remote remove origin
git remote add origin https://github.com/desktop-cgi/desktop-cgi.git
git remote -v
git pull origin main
npm install --force
npm update --force
cd ..
