/**
 * p-experience controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::p-experience.p-experience', ({ strapi }) => ({
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
