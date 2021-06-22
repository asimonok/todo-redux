export const permanentMiddleware =
    (store) =>
        (next) =>
            (action) => {
    const result = next(action);

    localStorage.setItem('state', JSON.stringify(store.getState()))

    return result
}