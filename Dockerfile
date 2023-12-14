FROM oven/bun

WORKDIR /app
COPY . . 

RUN bun
RUN bun build src/index.ts --outfile=out.js

CMD ["bun", "out.js"]