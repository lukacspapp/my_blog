"use strict";
/**
 * p-experience controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::p-experience.p-experience', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;
        const query = {
            filters: { slug },
            ...ctx.query,
        };
        const post = await strapi.entityService.findMany("api::post.post", query);
        return this.transformResponse(post[0]);
    }
}));
