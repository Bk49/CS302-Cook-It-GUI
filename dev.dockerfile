FROM oven/bun:1.1-alpine
WORKDIR /root/

COPY package.json .

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000
CMD ["bun", "preview"]

