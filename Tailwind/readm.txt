1) Go to google serach tailwind css
2) click on the first link 
3) Once the website have been started click on get started 
4) on click on play cdn
5) copy  <script src="https://cdn.tailwindcss.com"></script> and add to the head tag of your html file


2nd way:- offical way

1)npm install -D tailwindcss postcss autoprefixer vite

3)npx tailwindcss init -p 

3) install tailwindcss extension
4) tailwind.conig me content h usme "*" add kro
5) add script in  package.json  "scripts": {
    "start": "vite"
  },
6) make a main.cc file and add 
    @tailwind base;
    @tailwind components;
    @tailwind utilities; 
7) link that css file to html file