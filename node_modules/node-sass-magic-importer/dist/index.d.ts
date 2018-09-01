import { IMagicImporterOptions } from './interfaces/IImporterOptions';
declare const _default: (userOptions?: IMagicImporterOptions | undefined) => (url: string, prev: string) => {
    contents: string;
} | {
    file: string | null;
    contents: string;
} | {
    file: string;
} | null;
export = _default;
