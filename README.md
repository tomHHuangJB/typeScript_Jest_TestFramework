# Senior Test Automation Engineer | TypeScript Skills Demo

A concise portfolio showcasing TypeScript engineering and test automation capabilities expected for senior roles. The repository emphasizes maintainability, strong typing, clean architecture, and reliable Jest-based testing patterns for Node/TS services and libraries.

## Skills demonstrated

### TypeScript engineering
- Strict typing, type guards, and safe domain modeling
- Functional utilities and reusable helpers
- Clear module boundaries, ESM usage, and barrel exports
- OOP with dependency injection for testability
- Async/await patterns and error-path behavior

### Test automation practices
- Jest + ts-jest ESM configuration for TypeScript-first repos
- Deterministic async testing with fake timers
- Mocking, spies, and test isolation
- Parameterized tests and edge case coverage
- Coverage thresholds enforced in CI
- API testing patterns (contract validation, error handling, data-driven cases)

### Senior-level test engineering expectations
- Test strategy: unit focus with explicit async/error-path coverage
- Maintainability: separation of concerns and stable test design
- Reliability: deterministic tests (timers, mocks, DI)
- Quality gates: typecheck + coverage enforcement
- CI readiness: repeatable, automated test execution
- CI matrix: multi-Node version validation
- Containerized runs: Docker-ready test execution for parity
- Clear documentation and runnable scripts

## Repository structure
```
repo/
  src/
    basics/              # Types, variables, control flow
    collections/         # Arrays, maps, sets
    oop/                 # Classes, interfaces (DI)
    async/               # Promises, async/await, retries
    modules/             # Imports/exports (barrel)
    utils/               # Common helpers
  test/
    basics/              # Type guards, domain modeling
    collections/         # Data-driven tests, grouping/summing
    oop/                 # DI and mocking
    async/               # Retry/backoff, timers, aborts
    modules/             # Barrel exports, integration surface
    utils/               # Defensive coding, error paths
```

## How to run
```bash
npm install
npm test
```

## Useful scripts
- `npm test` - run all Jest tests
- `npm run test:watch` - watch mode
- `npm run test:coverage` - coverage report + threshold gate
- `npm run lint` - typecheck only
- `npm run build` - compile TS
- `npm run dev` - start Vite (optional)

## Notable examples (where to look)
- `src/async/retry.ts` + `test/async/retry.test.ts` — async retry logic, backoff, abort handling, and timer control
- `src/oop/greeter.ts` + `test/oop/greeter.test.ts` — dependency injection for deterministic tests
- `src/basics/types.ts` + `test/basics/types.test.ts` — type guards and domain modeling
- `src/collections/arrays.ts` + `test/collections/arrays.test.ts` — grouping/summing utilities with parameterized tests
- `src/utils/math.ts` + `test/utils/math.test.ts` — defensive coding and error-path coverage

## CI & quality gate
GitHub Actions runs on pull requests and pushes to the main branch. It performs typecheck and coverage-gated tests. The pipeline fails if line coverage drops below 80%. Test logs are uploaded as artifacts on failures for troubleshooting.
