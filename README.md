# Basic Vue 3, Vite and tailwind develop environment
* Vue 3 & latest vite version
* latest Tailwind and JIT mode
* full ESlint rules
* with auto Production deploy by doing following step : 
    * add `base` property in vite.config.js
    ```javascript=
    export default defineConfig({
        plugins: [vue()],
        base: "/Vue3-vite-tailwind-jit-mode/"
    })
    ```
    * add `deploy.sh` file under your project folder with following command:
    ```shell=
        // if any error, then stop
        set -e
        // build dist folder
        npm run build
        // move into dist folder
        cd dist
        // init git 
        git init
        // add all changes
        git add -A
        // commit changes
        git commit -m 'deploy'
        // push to remote repository
        git push -f git@github.com:<accountName>/<RepoName>.git master:gh-pages
        // go back to the project folder
        cd -
    ```
    * run `sh deploy.sh`
* just download or import the project to start using the  Tailwind JIT mode in the Vite & Vue 3 
