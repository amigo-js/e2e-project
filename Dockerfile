FROM cypress/included:9.4.1
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm ci --quiet
# COPY . .
# RUN $(npm bin)/cypress verify
# CMD ["npm", "run", "test"]
# ENTRYPOINT [ "npx", "cypress", "run" ]
CMD ["npm", "run", "test"]
# CMD [ "" ]
