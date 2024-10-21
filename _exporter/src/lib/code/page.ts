import { Blocks } from "./blocks";
import fs from 'fs-extra';
import path from 'path';
import { capitalizeFirstLetter } from "../../utils/string";
import { removeDuplicates } from "../../utils/array";
import { PathManager } from "../../utils/folder";

export class Page {
    block: Blocks = new Blocks();

    async bootstrap(pagesData: { page: string, path: string, data: { type: string, data: Record<string, any> }[], type: string }[]) {

        for (let i = 0; i < pagesData.length; i++) {
            const pageItem = pagesData[i];
            const pageName = pageItem.page;
            if (pageItem.data) {
                const ComponentNames = await this.block.createBlocks(pageItem.data, pageItem.type)
                await this.generatePage(pageName, ComponentNames, pageItem.type, pageItem.path)
            }

        }

    }

    /**
     * Generates a Next.js page with specified components.
     *
     * @param pageName - The name of the page to create.
     * @param components - An array of component names to import and render.
     * @param folder - The folder inside 'blocks' from which to import the components.
     */
    async generatePage(pageName: string, components: string[], folder: string, pathName: string): Promise<void> {
        // Define the base directory where the pages are located
        const baseDir = `${PathManager.getbasePath()}/src/app/`; // Adjust if necessary
        const pageDir = path.join(baseDir, pathName);
        try {
            // Create the page directory
            // Generate import statements
            const importStatements = `"use client";\nimport React from 'react';
${removeDuplicates(components).map((name) => "import " + name + (pathName == "/" ? " from '../blocks/" : " from '../../blocks/") + folder + "/" + name + "'").join('; \n')};
`;

            // Generate the component render
            const componentRender = components.map(component => `        <${component} />`).join('\n');

            // Define the page component
            const pageComponent = `const ${capitalizeFirstLetter(pageName)} = () => (
    <>
${componentRender}
    </>
);

export default ${capitalizeFirstLetter(pageName)};
`;

            // Combine imports and component
            const fileContent = `${importStatements}\n${pageComponent}`;
            const filePath = path.join(pageDir, 'page.tsx'); // Using .ts as per user request
            await fs.ensureFile(filePath);
            // Write the file
            await fs.writeFile(filePath, fileContent, 'utf8');

            console.log(`Page "${pageName}" created successfully at ${filePath}`);
        } catch (error) {
            console.error(`Error creating page "${pageName}":`, error);
            throw error;
        }
    }

}