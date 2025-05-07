

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
    - npx prisma generate (make sure removing the default route, let it generate client in the @prisma/client)
    - add src/index.js
        - export client instance
        - add a export alias for the client in package.json
            - make sure to export ./dist/index.js  (not ./src/index.ts --> creates problem during buildtime as node doesn't recognize .ts file)
            - import it anywhere using it
        - global pnpm install

    # some bugs arose at the build time
        - related to the mismatch in the js module mismatch
        - project is set to modern ESmodule
        - but some file were being compiled using the commonjs syntax
        - also the prisma client was being generated to some different route, not in the intended @prisma/client folder
        >> solution: 
            - removed hardcoded path from prisma.schema file
            - in package.json in the export alias of ."./client" as "./dist/index.js" 
                (now db client can be imported in the apps using @repo/db/client --> given added and installed as a devDependency)
            - added type : "module" explicitely to both the http and ws server

            

    # A problem arose, there were some module resolution error due to conflicts
    - the common modules in js are ; 
     1: CommonJS (older)
        "type": "commonjs" in package.json
        Use module: "CommonJS" in tsconfig
        Use require() and module.exports
        Node works cleanly, no file extension hell

    2. ESM (modern)
        "type": "module" in package.json
        Use import/export everywhere
        Set TypeScript to "module": "NodeNext"
        Add .js to all relative imports
        Run with node dist/file.js (not without extension)

