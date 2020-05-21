import webpack from 'webpack';
export declare function build(config: webpack.Configuration, { rootDirectory, customAppFile, isDevelopment, isServer, isReactRefreshEnabled, assetPrefix, sassOptions, }: {
    rootDirectory: string;
    customAppFile: string | null;
    isDevelopment: boolean;
    isServer: boolean;
    isReactRefreshEnabled: boolean;
    assetPrefix: string;
    sassOptions: any;
}): Promise<webpack.Configuration>;
