import { Decorator, DecoratorFactory } from './interfaces';

export interface ParameterDecorator extends Decorator {
    <T>(target: Record<string, T>, propertyKey: string, parameterIndex: number, ...args: T[]): void;
}

export interface ParameterDecoratorFactory extends DecoratorFactory {
    <T>(decorator: ParameterDecorator, ...args: T[]): ParameterDecorator;
}

export default function parameterDecoratorFactory
    <T>(decorator: Function, ...args: T[]): ParameterDecorator {
        return (target: Record<string, T>, propertyKey: string, parameterIndex: number): void =>
            typeof decorator === typeof Function
                && decorator(target, propertyKey, parameterIndex, ...args);
    }
