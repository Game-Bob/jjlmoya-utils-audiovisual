import fs from 'node:fs';
import path from 'node:path';

const sourceDir = 'd:/code/jjlmoya-utils-audiovisual/src/tests';
const baseDir = 'd:/code';

const testFiles = fs.readdirSync(sourceDir).filter(f => f.endsWith('.test.ts'));

const dirs = fs.readdirSync(baseDir).filter(d => 
  d.startsWith('jjlmoya-utils-') && 
  d !== 'jjlmoya-utils-shared' &&
  fs.statSync(path.join(baseDir, d)).isDirectory()
);

console.log(`Propagating tests to ${dirs.length} repositories...`);

dirs.forEach(repo => {
  const repoPath = path.join(baseDir, repo);
  const targetTestsDir = path.join(repoPath, 'src', 'tests');

  if (!fs.existsSync(targetTestsDir)) {
      fs.mkdirSync(targetTestsDir, { recursive: true });
  }

  testFiles.forEach(file => {
    const src = path.join(sourceDir, file);
    const dest = path.join(targetTestsDir, file);
    fs.copyFileSync(src, dest);
  });

  const oldTest = path.join(targetTestsDir, 'content_mandatory.test.ts');
  if (fs.existsSync(oldTest)) {
    fs.unlinkSync(oldTest);
  }
  
  console.log(`✓ Propagated to ${repo}`);
});
