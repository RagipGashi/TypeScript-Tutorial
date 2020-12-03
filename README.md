# TypeScript-Tutorial

[Eduonix - TypeScript Tutorial](https://www.eduonix.com/new_dashboard/the-complete-typescript-programming-guide-for-web-developers)


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




