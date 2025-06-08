const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Вкажи ім’я компонента: node tools/create-component.js MyComponent");
  process.exit(1);
}

// Переходимо на два рівні вище від tools: з tools → l14 → node → src/components
const basePath = path.join(__dirname, "..", "src", "components", componentName);

if (fs.existsSync(basePath)) {
  console.error("❌ Такий компонент вже існує!");
  process.exit(1);
}

fs.mkdirSync(basePath, { recursive: true });

const tsxContent = `import type { FunctionComponent } from 'react';
import cls from './${componentName}.module.css';

interface ${componentName}Props {
    
}
 
const ${componentName}: FunctionComponent<${componentName}Props> = () => {
    return ( 
        <div className={cls.container}>

        </div>
     );
}
 
export default ${componentName};
`;

const cssContent = `.container {
    
}
`;

fs.writeFileSync(path.join(basePath, `${componentName}.tsx`), tsxContent);
fs.writeFileSync(path.join(basePath, `${componentName}.module.css`), cssContent);

console.log(`✅ Компонент "${componentName}" створено успішно у src/components/${componentName}/`);