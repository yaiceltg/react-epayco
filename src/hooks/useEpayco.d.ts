interface EpaycoConfig {
    key: String;
    test?: boolean;
}
interface Epayco {
    checkout: {
        configure(options: any): any;
    };
    open(data: any): any;
}
/**
 *
 */
export declare const useEpayco: (config: EpaycoConfig) => {
    loadedScript: boolean;
    epayco: Epayco | undefined;
};
export default useEpayco;
