let fetch = require('node-fetch');

const getRepository = async (slug) => {
  const response = await fetch(`https://api.github.com/repos/mirego/${slug}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.mercy-preview+json', // NOTE: This header is needed to obtain repository topics (https://docs.github.com/en/rest/reference/repos#get-all-repository-topics-preview-notices)
    },
  });

  if (response.status !== 200) {
    console.error(`Error fetching repository mirego/${slug}: ${response.status} ${response.statusText}`);
    return process.exit();
  }

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
        featured: project.featured,
        createdAt: repository.created_at,
        description: repository.description,
        tags: repository.topics,
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
