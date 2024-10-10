export class PathManager {

    static basePath = "./../../_base/";

    static setbasePath(path: string) {
        this.basePath = path
    }

    static getbasePath() {
        return this.basePath
    }
}