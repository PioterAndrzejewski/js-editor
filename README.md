

<!-- PROJECT LOGO -->
![image](https://github.com/PioterAndrzejewski/js-editor/assets/109315248/4369db19-dc9b-4fa0-b54c-6f2206b77d23)


<br />
<div align="center">
<a href="https://pioterandrzejewski.github.io/js-editor/">View Demo</a> <br>
  <p align="center">
Interactive code editor and documenting tool
    <br />
    <br />
  </p>
</div>

![image](https://github.com/PioterAndrzejewski/js-editor/assets/109315248/229d8645-b265-46f0-929b-871d1e8cf590)

This is a web javascript editor.

Allows you to write Javascript code, import dependencies, bundle and execute code live in browser.

The app has also feature to document written code.


## Getting started

After cloning the repository and installing dependencies run the app using npm start command. 

  ```sh
  $ git clone https://github.com/PioterAndrzejewski/js-editor.git
  $ cd js-editor
  $ npm i
  $ npm start
  ```
Now you're ready to test the app in your browser on localhost:3000

### Built With

- Typescript
- React
- Redux
- HTML
- CSS
- Immer
- ESbuild
- axios

## About The Project



The app consists of several elements:

- [ ] action bar
![image](https://github.com/PioterAndrzejewski/js-editor/assets/109315248/a8f94ae0-ab25-44d8-bc32-99ba6cd3bbec)

Allows you to save current documentation status to JSON file and upload documentation from file. 
However, with every change, your documentation is being saved to local storage to save it in case of closing the window. 

- [ ] new-cell action bar

![image](https://github.com/PioterAndrzejewski/js-editor/assets/109315248/60a46120-c4e1-4fb7-b62b-4a0f3774b6b5)



Allows to create new text or code editor


- [ ] Code editor - for writing javascript code

![image](https://github.com/PioterAndrzejewski/js-editor/assets/109315248/d9afebd8-d5b3-4fd2-89cd-32a85c6dd9b9)



- [ ] Preview window - for displaying exactly what is written in code editor. App also downloads dependencies, bundles and shows preview of the code.

![image](https://github.com/PioterAndrzejewski/js-editor/assets/109315248/64ca6ffe-0c14-4520-930a-4027deb251d9)

Every next cell has bundled code from previous ones. 
Every cell has its own show() function to preview component that you want.

- [ ] Markup Editor - for editing text file 

![image](https://github.com/PioterAndrzejewski/js-editor/assets/109315248/e81d46ce-86ee-45dc-b3d9-737b40515316)

![image](https://github.com/PioterAndrzejewski/js-editor/assets/109315248/acc39cb6-0b87-477f-af70-53e82dd3b06c)



 ## To-do
- keeping track of changes to allow for undo and redo
