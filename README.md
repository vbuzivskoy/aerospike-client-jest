# aerospike-client-jest

## Setup
    npm install

## Run aerospike server
    docker-compose up -d

## Run test
To reproduce `Unable to register default event loop: Failed to add external loop. Capacity is 1 [-1]` run tests in serial.

### Parallel
    npm run test-parallel

### Serial
    npm run test-serial
