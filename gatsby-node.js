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

  for (let project of projects) {
    const repository = await getRepository(project.slug);

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
  }

  const externalProjects = require('./data/external-projects');

  externalProjects.forEach((project) => {
    actions.createNode({
      ...project,
      id: createNodeId(project.name),
      internal: {
        type: 'ExternalProject',
        contentDigest: createContentDigest(project.name),
      },
    });
  });
};
