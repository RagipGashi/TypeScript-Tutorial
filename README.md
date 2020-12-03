# TypeScript-Tutorial

[Eduonix - TypeScript Tutorial](https://www.eduonix.com/new_dashboard/the-complete-typescript-programming-guide-for-web-developers)

# Getting Started

- Assume that we have installed **Node.js**, **Git**, **VSCode** and created a folder where the codes will be saved.
- After writing some codes in **TypeScript**,
- Open `bash` and type:
```bash
tsc (fileName.ts)
```
- This command will **transpile** our **.ts** file in a **JavaScript** file, 
- To make it reload automatically and watch the changes, use:
```bash
tsc (fileName.js) -w
```

- Install Nodemon 
```bash
npm install -g nodemon
```
[Node Monitor](https://nodemon.io) - Node reload, automatically

- Open another bash cmd and type:
```bash
nodemon (fileName)
```
- This bash command makes the **Node** to reload automatically after changes in file


## Installing and configuring jest for TypeScript

- In root folder of the project, install jest:
```
npm i -D jest
```
- Installing types for TypeScript jest
```
npm i -D @types
```
- Installing **ts-test** which compiles first and then run the tests
```
npm i -D ts-jest
```
- Creating a file **jest.config.js** in the root of the project and pass this in it:
```
module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   };
```
- In **package.json** put this: 
```
"scripts": {
    "test": "jest",
    "built": "tsc"
},
```
- Create a test file named just like the file you want to test. 
  - Example: the file we want to test: **foo.ts**
  - Example: the test file named: **foo.test.ts**
  


## Testing the files


- To see if the configuration is properly installed, just write a test like this:
  - In **foo.ts**
  ```
  export function boo(a, b) {
    return a + b;
  }
  ```
  
  - In **foo.test.ts**
  ```
  import { boo } from './foo';
  
  describe('Testing boo()', () => {
    it('boo(3, 5): return 8', () => {
      expect(boo(3, 5).toBe(8),
    }),
  });
  ```
- Now run the test
```
run test
```




