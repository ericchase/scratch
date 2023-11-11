import path from 'node:path';

function classPreprocessor(classArray = []) {
  const classMap = new Map(classArray);
  const srcFSlash = path.resolve('./src').replaceAll('\\', '/');
  const srcBSlash = path.resolve('./src').replaceAll('/', '\\');
  function startsWithSrcPath(filepath = '') {
    // console.log(filepath);
    return filepath.startsWith(srcFSlash) || filepath.startsWith(srcBSlash);
  }

  function replaceClasses(content = '') {
    // console.log('before');
    // console.log(content);
    const transformed = content.replaceAll(
      /(class=["'])(.*)(["'])/g,
      (_match, g1, g2, g3) =>
        g1 +
        g2
          .split(' ')
          .map((name) => classMap.get(name) ?? name)
          .join(' ') +
        g3
    );

    // console.log('after');
    // console.log(transformed);
    return transformed;
  }

  return {
    name: 'class-replace',
    markup: ({ content, filename }) => (startsWithSrcPath(filename) ? { code: replaceClasses(content) } : ''),
  };
}
