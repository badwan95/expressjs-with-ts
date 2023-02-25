export default {
  swagger: '2.0',
  info: {
    title: 'My API',
    version: '1.0.0',
  },
  basePath: '/api',
  paths: {
    '/v2/': {
      get: {
        summary: 'Get a response',
        responses: {
          200: {
            description: 'response',
            schema: {
              type: 'text',
            },
          },
        },
      },
      post: {
        summary: 'Post a user',
        responses: {
          200: {
            description: 'response',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/User',
              },
            },
          },
        },
      },
    },
  },
  definitions: {
    User: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
    },
  },
};
