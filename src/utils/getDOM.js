const camelize = (name) => name.replace(/-./g, (x) => x.toUpperCase()[1]);

function getDOM() {
  const dom = {};
  document.querySelectorAll('*[id]').forEach((node) => {
    dom[camelize(node.id)] = node;
  });
  return dom;
}

export default getDOM;
