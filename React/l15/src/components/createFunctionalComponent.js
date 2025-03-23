import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComponentGenerator {
    constructor(componentName) {
        this.componentName = componentName;
        this.componentDir = path.join(__dirname, componentName);
    }

    createFolder() {
        if (!fs.existsSync(this.componentDir)) {
            fs.mkdirSync(this.componentDir);
        }
    }

    createComponentFile() {
        const componentTsx = `import React from "react";
import styles from "./${this.componentName}.module.css";

const ${this.componentName} = () => {
    return <div className={styles.container}>${this.componentName} Component</div>;
};

export default ${this.componentName};
`;

        fs.writeFileSync(path.join(this.componentDir, `${this.componentName}.tsx`), componentTsx);
    }

    createStyleFile() {
        const componentCss = `.container {
    padding: 10px;
    border: 1px solid #ccc;
}`;

        fs.writeFileSync(path.join(this.componentDir, `${this.componentName}.module.css`), componentCss);
    }

    generate() {
        this.createFolder();
        this.createComponentFile();
        this.createStyleFile();
        console.log(`✅ Компонент ${this.componentName} успешно создан!`);
    }
}

// Отримуємо ім'я компонента з аргументів командного рядка
const componentName = process.argv[2];

if (!componentName) {
    console.error("❌ Укажите имя компонента!");
    process.exit(1);
}

const generator = new ComponentGenerator(componentName);
generator.generate();
