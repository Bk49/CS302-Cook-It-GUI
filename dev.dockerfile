FROM oven/bun:1.1-alpine
WORKDIR /root/

COPY package.json .

COPY bun.lockb .

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

EXPOSE 3000
CMD ["bun", "preview"]

