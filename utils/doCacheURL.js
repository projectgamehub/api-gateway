const URLsToCached = ["/games/games"];

export const doCacheURL = (URL) => {
    const normalizedURL = URL.endsWith("/") ? URL.slice(0, -1) : URL;
    return URLsToCached.includes(normalizedURL);
};
