

export interface BuildPaths {
    entry: string;
    src: string
    public: string
    html: string;
    output: string;
    scripts: string
    
}
export type BuildMode = 'production' | 'development'  | "none";

export enum APP  {
    CALLINGS='callings',
    DOCUMENTS='documents',
    REPORT='report'
}
export interface BuildOptions {

    port: number;
    paths: BuildPaths;
    mode: BuildMode
    analyzer?:boolean
    inBitrix?:boolean
    app?: APP
}