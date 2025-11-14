# Multi-stage build for PlacementHub (backend only)
FROM node:18-alpine AS build
WORKDIR /app
COPY backend/package.json ./backend/
RUN apk add --no-cache python3 make g++ || true
WORKDIR /app/backend
COPY backend/ ./
RUN npm install --production

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/backend /app
ENV NODE_ENV=production
EXPOSE 5000
CMD ["node","server.js"]
