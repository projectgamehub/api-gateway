const URLsToCached = [
    "/games/games",
    "/user/get-username-by-id/:id",
    "/user/get-avatar-url/:id"
];

export const doCacheURL = (URL) => {
    const normalizedURL = URL.endsWith("/") ? URL.slice(0, -1) : URL;
    return URLsToCached.some((pattern) => {
        const regexPattern = new RegExp(
            "^" + pattern.replace(/:[^/]+/g, "[^/]+") + "$"
        );
        return regexPattern.test(normalizedURL);
    });
};
