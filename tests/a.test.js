/**
 * @jest-environment ./tests/aerospikeEnvironment.js
 */


let Aerospike

beforeAll(() => {
  Aerospike = global.__SHARED_MODULE__
});

describe("Test Suite A", () => {
    it("Test Case A", async () => {
        const client = Aerospike.client({
            hosts: [{ addr: "127.0.0.1", port: 3000 }],
            log: { level: Aerospike.log.DEBUG }
        });

        await client.connect();

        const key = new Aerospike.Key('test-namespace', 'test-set', 'test-key-a');
        await client.put(key, {a: 123});
        const record = await client.get(key);

        expect(record).toBeDefined();

        await client.close(false);
    }, 10000);
});
