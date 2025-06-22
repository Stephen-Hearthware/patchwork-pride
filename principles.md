# Guiding Principles

These principles help maintain a healthy codebase and a pleasant developer experience.

- **Write clean, idiomatic TypeScript and Tailwind CSS**
  - Use consistent syntax and avoid unnecessary abstractions.
  - Example: prefer `const` over `let` when variables are not reassigned, and keep Tailwind classes organized logically.
- **Keep components small and composable**
  - Break UI pieces into reusable components so they can be tested and maintained independently.
  - Example: separate a button component from a complex form so the button can be reused elsewhere.
- **Prefer clarity over cleverness**
  - Readable code is easier to debug and share.
  - Example: use descriptive variable names rather than short ones that save a few characters.
- **Use semantic HTML and accessible UI patterns**
  - Follow web standards to support screen readers and assistive technologies.
  - Example: use `<button>` for actions instead of `<div>` elements styled as buttons.
- **Keep prompts and changes scoped and reviewable**
  - Make focused pull requests that are easy to understand.
  - Example: avoid bundling unrelated feature work with refactoring in the same commit.
- **Avoid premature optimization**
  - Optimize only when benchmarks show it is necessary; prioritize clarity first.
  - Example: choose straightforward loops over complex micro-optimizations until performance issues are observed.

By applying these practices, the project stays maintainable and welcoming for contributors.
