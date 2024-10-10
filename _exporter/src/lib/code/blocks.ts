import { PathManager } from "../../utils/folder";
import { capitalizeFirstLetter } from "../../utils/string";
import { Json2React } from "../converters/json2react";
import fs from "fs-extra"
import path from "path";


export class Blocks {


    async createBlocks(blocksData: { type: string, data: Record<string, any> }[], folder: string): Promise<string[]> {
        let componentNames = []
        for (let i = 0; i < blocksData.length; i++) {
            const block = blocksData[i];
            let component = await this.createBlock(block.type, block.data.version, block.data, folder);
            if (component)
                componentNames.push(component)
        }

        return componentNames;
    }

    async createBlock(component: string, version: string, data: Record<string, any>, folder: string) {

        const json2react = new Json2React();
        try {

            const filePath = path.join(__dirname, `../../../blocks/${folder == "static" ? "marketing" : folder}/${component}/${version}/component.json`);
            const content = await fs.readFile(filePath, 'utf-8');
            const jsonData = JSON.parse(content);
            const componentName = capitalizeFirstLetter(`${component}${version}Component`)

            let result = json2react.transform(componentName, jsonData, data)

            const newPath = `${PathManager.getbasePath()}/src/blocks/${folder}/${componentName}.tsx`;
            await fs.ensureFile(newPath)
            await fs.writeFile(newPath, result);

            return componentName
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
        }



    }


}