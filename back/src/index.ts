export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');

    extensionService.use({
      resolversConfig: {
        'Query.authors': {
          /**
           * Querying the Categories content-type
           * bypasses the authorization system.
           */
          auth: false
        },
        'Query.category': {
          auth: false
        },
      }
    })
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
