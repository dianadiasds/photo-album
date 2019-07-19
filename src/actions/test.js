export function helloWorld(firstName, lastName) {
    return {
        type: 'HELLO_WORLD',
        payload: {
            firstName: firstName,
            lastName: lastName
        }
    }
}
