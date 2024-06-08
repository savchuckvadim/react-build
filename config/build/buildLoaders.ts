import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { buildBabelLoader } from "./babel/buildBabelLoader";


export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'
    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }
    const assetLoader = {

        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

    }

    const cssLoader = {
        loader: "css-loader",
        options: {
            importLoaders: 1,
            modules: {
                localIdentName: isDev
                    ? "[local]--[hash:base64:5]"
                    : "[hash:base64:5]",

                // exportGlobals: true,

                // localIdentContext: path.resolve(__dirname, "src"),
                // // localIdentHashSalt: "my-custom-hash",
                // namedExport: true,
                // exportLocalsConvention: "as-is",
                // exportOnlyLocals: false,
            }


        },
    }


    const scssLoader = {

        // test: /\.s[ac]ss$/i,
        test: /\.module\.(c|sa|sc)ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoader,
            // "css-loader",
            // Compiles Sass to CSS
            {
                loader: 'sass-loader', options: {
                    sourceMap: true
                }
            },
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ],

    }

    const babelLoader = buildBabelLoader(options)

    return [
        assetLoader,
        scssLoader,
        // Global CSS
        {
            test: /\.(c|sa|sc)ss$/i,
            exclude: /\.module\.(c|sa|sc)ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },
        babelLoader,
        svgLoader
    ]

}