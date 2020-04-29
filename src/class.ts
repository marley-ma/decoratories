import { Decorator, DecoratorFactory } from './interfaces';

export interface ClassDecorator extends Decorator {
    <T>(target: Function, ...args: T[]): void;
}

export interface ClassDecoratorFactory extends DecoratorFactory {
    <T>(decorator: ClassDecorator, ...args: T[]): ClassDecorator;
}

export default function classDecoratorFactory
    <T>(decorator: ClassDecorator, ...args: T[]): ClassDecorator {
        return (target: Function): void =>
            typeof decorator === typeof Function
                && decorator(target, ...args);
    }
