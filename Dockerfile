FROM cypress/base:12.16.1
WORKDIR /app
COPY package*.json ./
RUN npm ci --quiet
COPY . .
RUN $(npm bin)/cypress verify
CMD ["npm", "run", "test"]
