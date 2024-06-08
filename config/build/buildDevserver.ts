import { BuildOptions } from "./types/types";

export function buildDevserver(options: BuildOptions) {

    return {
        port: options.port ?? 3000,
        open: true,
        hot:true
    }
}