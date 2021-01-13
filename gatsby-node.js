exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  const projects = require('./data/projects');

  projects.forEach((project) => {
    actions.createNode({
      ...project,
      id: createNodeId(project.name),
      internal: {
        type: 'Project',
        contentDigest: createContentDigest(project.name),
      },
    });
  });

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
