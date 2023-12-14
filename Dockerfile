FROM oven/bun

WORKDIR /app
COPY . . 

RUN bun install
RUN bun build src/index.ts --outfile=out.js

CMD ["bun", "out.js"]