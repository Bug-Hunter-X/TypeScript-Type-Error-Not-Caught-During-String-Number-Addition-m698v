# TypeScript Type Error Not Caught During String-Number Addition

This repository demonstrates a subtle bug in TypeScript where a type error is not caught during the addition of a string to a number.  The function signature correctly defines the parameters as numbers, but the TypeScript compiler does not throw an error at compile time, leading to unexpected behavior and potential runtime issues.

The `bug.ts` file showcases the issue.  The `bugSolution.ts` demonstrates a solution to prevent this unexpected behavior.

## Bug
The core issue lies in the lack of runtime type checking for the parameters of the `add` function. While the function signature specifies numbers, the TypeScript compiler doesn't prevent passing a string as an argument.