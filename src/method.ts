import { Decorator, DecoratorFactory } from './interfaces';

export interface MethodDecorator extends Decorator {
    <T>(target: Record<string, T>, propertyKey: string, descriptor: PropertyDescriptor, ...args: T[]): void;
}

export interface MethodDecoratorFactory extends DecoratorFactory {
    <T>(decorator: MethodDecorator, ...args: T[]): MethodDecorator;
}

export default function methodDecoratorFactory
    <T>(decorator: MethodDecorator, ...args: T[]): MethodDecorator {
        return (target: Record<string, T>, propertyKey: string, descriptor: PropertyDescriptor): void =>
            typeof decorator === typeof Function
                && decorator(target, propertyKey, descriptor, ...args);
    }

