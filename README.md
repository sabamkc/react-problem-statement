# React Problem Statement

Small React app used for testing Docker and Vite setup.

## Docker

Development (Vite dev server):

- Build the dev image:

  ```docker build --target dev -t react-problem-statement:dev .```

- Run the dev container:

  ```docker run --rm -p 3000:3000 react-problem-statement:dev```

- Run the dev container with source mounted (dev workflow)
  ```
  docker run --rm -it \
    -p 3000:3000 \
    -v "$(pwd)":/app \
    -v /app/node_modules \
    -e CHOKIDAR_USEPOLLING=true \
    -e CHOKIDAR_INTERVAL=100 \
    react-problem-statement:dev
  ```

Production (static build served by nginx):

- Build the prod image:

  ```docker build -t react-problem-statement:prod .```

- Run the prod container (maps port 80 in container to 8080 on host):

  ```docker run --rm -p 8080:80 react-problem-statement:prod```

Notes:
- Vite `root` is `src/public`, so build output is `src/public/dist` (this is what the nginx stage serves).
- For reproducible installs, consider committing `package-lock.json` and using `npm ci` in the build stage.
- When building the dev image explicitly, use `--target dev`.
