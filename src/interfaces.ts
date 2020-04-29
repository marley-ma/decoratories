export interface Decorator {
    <T>(...args: T[]): void;
}

export interface DecoratorFactory {
    <T>(decorator: Decorator, ...args: T[]): Decorator;
}

export enum DecoratorType {
    PROPERTY,
    PARAMETER,
    METHOD,
    CLASS
}
