import { ACCESS_TOKEN_KEY } from '../../src/api/config'
import { getAccessToken, setAccessToken, logout } from '../../src/api/auth'

// auth.js uses browser local storage so we mock this with mocks.js
describe("suite of tests to validate auth.js", () => {
    beforeEach(() => {
        localStorage.clear();
    });
    test(
        `setAccessToken(): given 'this is an access token' and key=${ACCESS_TOKEN_KEY} is stored to localStorage`,
        () => {
            const theAccessToken = 'this is an access token'
            setAccessToken(theAccessToken);
            expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBe(theAccessToken)
        });
    test(
        `setAccessToken(): given undefined access token should not overwrite localStorage at ${ACCESS_TOKEN_KEY}`,
        () => {
            const expected = 'this should not change';
            localStorage.setItem(ACCESS_TOKEN_KEY, expected);
            setAccessToken(undefined);
            expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBe(expected)
        });
    test(`getAccessToken(): should return same value as localStorage.getItem(${ACCESS_TOKEN_KEY})`, () => {
        localStorage.setItem(ACCESS_TOKEN_KEY, 'this is the expected access token return value');
        expect(getAccessToken()).toBe(localStorage.getItem(ACCESS_TOKEN_KEY))
    });
    test(`logout(): expect localStorage.getItem(${ACCESS_TOKEN_KEY}) to be undefined`, () => {
        localStorage.setItem(ACCESS_TOKEN_KEY, 'this is the access token value before logout');
        logout();
        expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBe(undefined);
    });
});