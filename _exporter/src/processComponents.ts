import { React2Json } from "./lib/converters/react2json";
import path from "path";

const components = ["marketing", "application", "auth"]

const react2json = new React2Json();

components.forEach((component) => {
    const folderPath = path.join(__dirname, '../blocks', component);
    react2json.processFolder(folderPath)
        .then(() => console.log('Processing complete'))
        .catch((error: any) => console.error('Error:', error));
})
