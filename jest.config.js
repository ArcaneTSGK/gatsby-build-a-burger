module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    testURL: 'http://localhost',
    "snapshotSerializers": ["enzyme-to-json/serializer","jest-emotion/serializer"],
    "setupTestFrameworkScriptFile": "<rootDir>/src/setupEnzyme.ts",
};