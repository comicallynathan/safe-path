# safe-path

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

# hOw Do I uSe?
```ts
const Safe = ( await import( "./modules/Safer" ) ).Intialize( app );

Safe( string )
    .then(
        () => {} // Runs when path is safe
    )
    .catch(
        () => {} // Runs when path is risky
    )
```