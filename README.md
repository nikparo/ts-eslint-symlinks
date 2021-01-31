# TS-Eslint directory symlinks demo

This repo demonstrates a bug with ts-eslint. When there is a symlink pointing at `libs`, or a specific library to apps or elsewhere that alphabetically comes before libs, then linting will throw `Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.` errors.

```sh
npm run lint
# OR
npx eslint libs/symlinked-lib/**/*.ts
```

Result:

```
.../ts-eslint-symlinks/libs/symlinked-lib/src/index.ts
  0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: libs/symlinked-lib/src/index.ts.
The file must be included in at least one of the projects provided
```

The error can be removed by deleting the symlink pointing at libs:

``` sh
rm apps/legacy-app/libs
```
