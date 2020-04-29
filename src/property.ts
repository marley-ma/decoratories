import { Decorator, DecoratorFactory } from './interfaces';

export interface PropertyDecorator extends Decorator {
    <T>(target: Record<string, T>, propertyKey: string, ...args: T[]): void;
}

export interface PropertyDecoratorFactory extends DecoratorFactory {
    <T>(decorator: PropertyDecorator, ...args: T[]): PropertyDecorator;
}

export default function propertyDecoratorFactory
    <T>(decorator: PropertyDecorator, ...args: T[]): PropertyDecorator {
        return (target: Record<string, T>, propertyKey: string): void =>
            typeof decorator === typeof Function
                && decorator(target, propertyKey, ...args);
    }