# Motion

This site uses motion tokens defined in `styles/tokens.scss` to keep animation consistent:

- `--ease-standard` and `--ease-emph` provide easing curves.
- `--dur-1`, `--dur-2`, and `--dur-3` define standard durations.

## Entrance animations

Helpers for entrance transitions live in `styles/motion.scss` and `lib/motion.ts`.

1. Apply the `@include fade-slide-up;` mixin to the element's class.
2. Use the `useInView` hook to receive an element ref and add an `isVisible` class when it enters the viewport.
3. Animations are wrapped in a `prefers-reduced-motion: no-preference` media query; users who prefer reduced motion see content without transitions.

These utilities keep motion subtle and respectful while providing a polished entrance effect.
