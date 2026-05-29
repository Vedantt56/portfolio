const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'ENOENT' || err.code === 'EACCES') {
        console.warn('Skipping file:', dirFile);
      } else {
        throw err;
      }
    }
  });
  return filelist;
}

const files = walkSync('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  if (content.includes('--color-accent-orange')) {
    content = content.replace(/--color-accent-orange/g, '--color-accent-primary');
    changed = true;
  }
  if (content.includes('--color-accent-cream')) {
    content = content.replace(/--color-accent-cream/g, '--color-text-light');
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(f, content);
  }
});
