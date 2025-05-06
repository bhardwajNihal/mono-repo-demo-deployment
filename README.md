

- Initializa a monorepo via turborepo
- get rid of docs app
- add two servers - http and ws in the app dir
- add a db folder in packages dir
    - initialize an empty node project
    - add @repo/typescript-config as devDependency
    - add tsconfig.json (npx tsc --init)
        - extend it to the @repo/tsconfig.json/base.json
    - install prisma
    - >> npx prisma init --> create a prisma schema file
    - create a user model
    - npx prisma migrate dev --> add migration >> create table
    - npx prisma generate --> generates client to facilitate talking to db (this time automatically generated client)
    - add src/index.js
        - export client instance
        - add a export alias for the client >> import it anywhere using it
        - global pnpm install