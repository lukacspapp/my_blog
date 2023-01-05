"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    auth: {
        secret: process.env.ADMIN_JWT_SECRET,
    },
    apiToken: {
        salt: process.env.API_TOKEN_SALT,
    },
});
