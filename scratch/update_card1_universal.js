const fs = require('fs');
const path = require('path');

const files = [
  'WebDevDetailView.tsx',
  'DataAnalyticsDetailView.tsx',
  'AIEngineeringDetailView.tsx',
  'MachineLearningDetailView.tsx',
  'DesktopMobileDetailView.tsx',
  'UIUXDetailView.tsx',
  'CodeLearningDetailView.tsx'
];

const universalDescPublic = "Explore the complete project repository on GitHub, including production source code, commit history, architectural assets, and technical documentation.";
const universalDescPrivate = "Source code access is restricted under non-disclosure agreements (NDA) or proprietary commercial rights. No public repository is published.";

for (const file of files) {
  const filePath = path.join(__dirname, '../src/components/projects/categories', file);
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace badge text: PUBLIC_VCS -> PUBLIC, PUBLIC_REPO -> PUBLIC
  content = content.replace(/>\s*PUBLIC_VCS\s*<\/span>/g, '>PUBLIC</span>');
  content = content.replace(/>\s*PUBLIC_REPO\s*<\/span>/g, '>PUBLIC</span>');
  content = content.replace(/>\s*PUBLIC_DESIGN\s*<\/span>/g, '>PUBLIC</span>');
  
  // Replace badge text: PRIVATE_NDA -> PRIVATE, RESTRICTED -> PRIVATE
  content = content.replace(/>\s*PRIVATE_NDA\s*<\/span>/g, '>PRIVATE</span>');
  content = content.replace(/>\s*RESTRICTED\s*<\/span>/g, '>PRIVATE</span>');

  // Replace description paragraph in Card 1
  // We match the <p ... mb-5"> ... </p> after the <h3> (or <h4>)
  // Let's use regex to replace the paragraph following GitHub Repository
  const pattern = /(<h[34][^>]*>\s*\{[^}]*?\?\s*["']GitHub Repository["'][^<]*<\/h[34]>\s*<p[^>]*>)([\s\S]*?)(<\/p>)/;
  
  if (pattern.test(content)) {
    content = content.replace(pattern, (match, prefix, oldText, suffix) => {
      // Determine the variable name: hasRepoUrl or isPublicRepo
      const varName = oldText.includes('isPublicRepo') ? 'isPublicRepo' : 'hasRepoUrl';
      return `${prefix}\n                {${varName}\n                  ? "${universalDescPublic}"\n                  : "${universalDescPrivate}"}\n              ${suffix}`;
    });
    console.log(`Updated Card 1 in ${file}`);
  } else {
    console.warn(`Pattern not matched in ${file}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}
