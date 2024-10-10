import fs from "fs-extra"
import unzipper from "unzipper";
import archiver from 'archiver';

import path from "path";
import { glob } from "glob";
import ejs from "ejs";


export class Structure {

    static CONFIG = {
        zipPath: './../../../_base.zip', // Path to the base Next.js ZIP
        extractPath: './tmp',   // Path to extract the project
        blocksSource: './blocks',             // Path where blocks are stored
        shacdnComponents: './components/ui', // Path for shared components
        appDir: 'src/app',                           // App directory inside src
    };

    // Utility function to extract ZIP
    static async extractZip(extractTo: string) {

        await fs.ensureDir(extractTo);
        const filePath = path.join(__dirname, this.CONFIG.zipPath);

        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(unzipper.Extract({ path: extractTo }))
                .on('close', resolve)
                .on('error', reject);
        });
    }


    /**
     * Zips a folder into a ZIP file.
     * @param sourceDir The directory to zip.
     * @param outPath The output path for the ZIP file.
     * @returns A promise that resolves when the zipping is complete.
     */
    static zipFolder(sourceDir: string, outPath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            // Create a file to stream archive data to.
            const output = fs.createWriteStream(outPath);
            const archive = archiver('zip', {
                zlib: { level: 9 }, // Sets the compression level.
            });

            // Listen for all archive data to be written.
            output.on('close', () => {
                console.log(`${archive.pointer()} total bytes`);
                console.log('Archiver has been finalized and the output file descriptor has closed.');
                resolve();
            });

            // Catch warnings (e.g., stat failures and other non-blocking errors).
            archive.on('warning', (err) => {
                if (err.code === 'ENOENT') {
                    console.warn('Warning:', err.message);
                } else {
                    reject(err);
                }
            });

            // Catch errors.
            archive.on('error', (err) => {
                reject(err);
            });

            // Pipe archive data to the file.
            archive.pipe(output);

            // Append files from the source directory, putting its contents at the root of archive.
            archive.directory(sourceDir, false);

            // Finalize the archive (i.e., finish the stream).
            archive.finalize();
        });
    }


    // // Utility function to extract ZIP
    // async extractZip(zipPath: string, extractTo: string) {

    //     await fs.ensureDir(extractTo);

    //     return new Promise((resolve, reject) => {
    //         fs.createReadStream(zipPath)
    //             .pipe(unzipper.Extract({ path: extractTo }))
    //             .on('close', resolve)
    //             .on('error', reject);
    //     });
    // }

    // // Utility function to copy blocks
    // async copyBlocks(blocksSource: string, targetDir: string) {
    //     // const blocks = glob.sync('**/*', { cwd: blocksSource, nodir: true });
    //     // for (const block of blocks) {
    //     //     const srcPath = path.join(blocksSource, block);
    //     //     const destPath = path.join(targetDir, 'blocks', block);
    //     //     await fs.ensureDir(path.dirname(destPath));
    //     //     await fs.copyFile(srcPath, destPath);
    //     //     console.log(`Copied block: ${block}`);
    //     // }

    //     // HERE CALL BLOCK TO CREATE ALL BLOCKS FROM DATA
    // }

    // // Utility function to copy shared components
    // async copySharedComponents(sharedSource: string, targetDir: string) {
    //     const components = glob.sync('**/*', { cwd: sharedSource, nodir: true });
    //     for (const component of components) {
    //         const srcPath = path.join(sharedSource, component);
    //         const destPath = path.join(targetDir, 'components/shared', component);
    //         await fs.ensureDir(path.dirname(destPath));
    //         await fs.copyFile(srcPath, destPath);
    //         console.log(`Copied shared component: ${component}`);
    //     }
    // }

    // // Utility function to construct pages automatically
    // async constructPages(appDir: string) {
    //     const blocksDir = path.join(appDir, 'blocks');
    //     const pagesDir = path.join(appDir, 'pages');

    //     // Ensure pages directory exists
    //     await fs.ensureDir(pagesDir);

    //     // Get all block components
    //     const blockFiles = glob.sync('**/*.jsx', { cwd: blocksDir });

    //     for (const blockFile of blockFiles) {
    //         const blockName = path.basename(blockFile, path.extname(blockFile));
    //         const pagePath = path.join(pagesDir, `${blockName}/page.jsx`);

    //         // Create page directory
    //         await fs.ensureDir(path.dirname(pagePath));

    //         // Simple EJS template for the page
    //         const pageTemplate = `
    //         import React from 'react';
    //         import { <%= blockName %> } from '../blocks/<%= blockRelativePath %>';

    //         export default function <%= blockName %>Page() {
    //             return (
    //             <div>
    //                 <h1><%= blockName %> Page</h1>
    //                 <<%= blockName %> />
    //             </div>
    //             );
    //         }
    //         `;

    //         // Calculate relative path for import
    //         const blockRelativePath = path.relative(path.dirname(pagePath), path.join(blocksDir, blockFile)).replace(/\\/g, '/').replace(/\.(jsx|js|ts|tsx)$/, '');

    //         // Render the template
    //         const pageContent = ejs.render(pageTemplate, { blockName, blockRelativePath });

    //         // Write the page file
    //         await fs.writeFile(pagePath, pageContent, 'utf8');
    //         console.log(`Constructed page for block: ${blockName}`);
    //     }
    // }

    // // Main function to orchestrate the tasks
    // async setupNextjsProject() {
    //     try {
    //         console.log('Extracting ZIP...');
    //         await this.extractZip(this.CONFIG.zipPath, this.CONFIG.extractPath);
    //         console.log('Extraction complete.');

    //         const appDirectory = path.join(this.CONFIG.extractPath, this.CONFIG.appDir);

    //         console.log('Copying blocks...');
    //         await this.copyBlocks(this.CONFIG.blocksSource, appDirectory);
    //         console.log('Blocks copied.');

    //         console.log('Copying shared components...');
    //         await this.copySharedComponents(this.CONFIG.shacdnComponents, appDirectory);
    //         console.log('Shared components copied.');

    //         console.log('Constructing pages...');
    //         await this.constructPages(appDirectory);
    //         console.log('Pages constructed.');

    //         console.log('Next.js project setup complete.');
    //     } catch (error) {
    //         console.error('Error setting up Next.js project:', error);
    //     }
    // }

}