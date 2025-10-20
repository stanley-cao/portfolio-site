declare module "leo-profanity" {
    export function loadDictionary(lang?: string): void;
    export function check(text: string): boolean;
    export function clean(text: string): string;
    export function add(words: string[] | string): void;
    export function remove(words: string[] | string): void;
    export function list(): string[];
  }