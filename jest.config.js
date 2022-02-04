module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "localhost:8080"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}