const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database initialized");
// const closeDatabase = () => console.log("Database closed");

const nameCheck = () => console.log("Checking Names");

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = "Jeff";
        expect(user).toBe("Jeff");
    });

    test('User is Karen', () => {
        const user = "Karen";
        expect(user).toBe("Karen");
    });
});

// equal
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not equal
test('Add 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// falsy
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});


test('Return user successfully', () => {
    expect(functions.createUser()).toEqual({firstName: 'Alex', lastName: 'Cristian'});
});

// less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// regular expressions
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// working with async data

// promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});

// async await
test('User fetched name should be Leanne Graham / await', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser(); 
    expect(data.name).toEqual('Leanne Graham');
});