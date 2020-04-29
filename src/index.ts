import classDecoratorFactory from './class';
import methodDecoratorFactory from './method';
import propertyDecoratorFactory from './property';
import parameterDecoratorFactory from './parameter';

import { Decorator, DecoratorFactory, DecoratorType } from './interfaces';

export {
    Decorator,
    DecoratorFactory,
    DecoratorType,
    classDecoratorFactory,
    methodDecoratorFactory,
    propertyDecoratorFactory,
    parameterDecoratorFactory
};
