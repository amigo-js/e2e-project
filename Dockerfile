# Base imgae taken from https://github.com/cypress-io/cypress-docker-images
FROM cypress/included:9.4.1
# Create the folder where our project will be stored
RUN mkdir /my-cypress-project
# We make it our workdirectory
WORKDIR /my-cypress-project
# Let's copy the essential files that we must use to run our scripts
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
# Install the cypress dependencies in the work directory
RUN npm ci --quiet
# Executable commands the container will use[Exec Form]
CMD ["npm", "run", "test"]

