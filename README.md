# Elemix Test Bench

Performance and memory stress harness for [Elemix](https://github.com/neuralfog/elemix)
and its compiled renderer.

Renders a configurable grid of cards, each driven by three independent update sources —
a shared store, internal state, and props — that can re-render every animation frame.
Toggle them to isolate what you're measuring.

## Run

```bash
pnpm install
pnpm dev        # dev server
pnpm build      # production build
pnpm preview    # serve the build
```

Templates are compiled by [`@neuralfog/elemix-vite`](https://github.com/neuralfog/elemix/tree/main/packages/vite).

## Controls

- **Components** — how many cards to render.
- **Store** — animate the shared store every frame.
- **State** — animate each card's internal state every frame.
- **Props** — animate props pushed from the parent every frame.

Stack all three at a high component count to push the renderer, then take a heap
snapshot to read memory recovery.
