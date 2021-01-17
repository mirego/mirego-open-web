let fetch = require('node-fetch');

const getRepository = async (slug) => {
  const response = await fetch(`https://api.github.com/repos/mirego/${slug}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  return await response.json();
};

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  const projects = require('./data/projects');

  const projectPromises = projects.map((project) => {
    return getRepository(project.slug).then((repository) => {
      actions.createNode({
        ...project,
        id: createNodeId(project.name),
        starCount: repository.stargazers_count,
        createdAt: repository.created_at,
        internal: {
          type: 'Project',
          contentDigest: createContentDigest(project.name),
        },
      });
    });
  });

  await Promise.all(projectPromises);

  const externalProjects = require('./data/external-projects');

  for (let project of externalProjects) {
    actions.createNode({
      ...project,
      id: createNodeId(project.name),
      internal: {
        type: 'ExternalProject',
        contentDigest: createContentDigest(project.name),
      },
    });
  }
};
