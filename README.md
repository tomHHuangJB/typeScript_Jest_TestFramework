# TypeScript Skills + Test Automation Demo

A TypeScript repo showing clean code structure, modern TypeScript, and comprehensive Jest tests (unit + async + mocks + timers).

## Structure
```
repo/
  src/
    basics/
    collections/
    oop/
    async/
    modules/
    utils/
  test/
    basics/
    collections/
    oop/
    async/
    modules/
    utils/
```

## Quick start
```bash
npm install
npm test
```

## Scripts
- `npm test` - run all Jest tests
- `npm run test:watch` - watch mode
- `npm run test:coverage` - coverage report
- `npm run lint` - typecheck only
- `npm run build` - compile TS
- `npm run dev` - start Vite (optional)

## Highlights
- Parameterized tests and edge cases
- Async and error-path coverage
- Mocks/spies, fake timers, and test setup
- Clear separation of concerns across domains
