all:
  pnpm fmt
  pnpm lint

clean:
  rm -rf node_modules
  rm -rf src/.vitepress/cache
  rm -rf src/.vitepress/dist
