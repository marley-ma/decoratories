# decoratories

Simple Typescript implementation of Typescript decorator factory methods for easier creation of custom decorator functions.

## Summary

- [Installation](#installation)
- [Usage](#usage)
- [Factories](#factories)
    - [Parameter decorator](#parameter-decorator)
    - [Method decorator](#method-decorator)
    - [Property decorator](#property-decorator)
    - [Class decorator](#class-decorator)
- [Examples](#examples)

## Installation

> Please note that decorators support is in [stage 2 proposal](https://github.com/tc39/proposal-decorators) for JavaScript and is available as experimental feature in [Typescript](https://www.typescriptlang.org/docs/handbook/decorators.html).

```bash
$ yarn add --dev decoratories
```

If you prefer `NPM`:

```bash
$ npm install --save-dev decoratories
```

### Typescript compiler

For proper usage of decorators, you have to turn on decorators support. This can be achieved by modifying `tsconfig.json` file in following way:

```json
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

You can of course do it via Typescript CLI:

```bash
$ tsc --target ES5 --experimentalDecorators
```


## Usage

This module is design to act as dependency for you project. So after turning on this Typescript feature on you can easily write your own decorators via this module native API.

You can simply import corresponding type factory function and use it in following way.

```typescript
import { classDecoratorFactory } from 'decoratories';

const customDecorator = classDecoratorFactory(() => console.log('Hello World from decorator'));

@customDecorator
class Example {}
```

Decorator interfaces and enumeration is also exported from module and can be used for various purposes based on your needs.

__Interfaces__

```typescript
import { Decorator, DecoratorFactory } from 'decoratories';
```

__Enumerations__

```typescript
import { DecoratorType } from 'decoratories';
```

## Factories

Module is exporting four type of decorator factories based on their purpose. Please note that Typescript is executing decorators in following evaluation order.

1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
3. Parameter Decorators are applied for the constructor.
4. Class Decorators are applied for the class.

### Parameter decorator

```typescript
import { parameterDecoratorFactory } from 'decoratories';

const parameterDecorator = () => parameterDecoratorFactory();

class Example {
    
    protected property: string;

    get accessor(): string {
        return this.property;
    }

    method(@parameterDecorator parameter: string): void {}         
}
```

### Method and accessor decorator

```typescript
import { methodDecoratorFactory } from 'decoratories';

const methodDecorator = () => methodDecoratorFactory();
const accessorDecorator = () => methodDecoratorFactory();

class Example {
    
    protected property: string;
    
    @accessorDecorator
    get accessor(): string {
        return this.property;
    }
    
    @methodDecorator
    method(parameter: string): void {}         
}
```

### Property decorator

```typescript
import { propertyDecoratorFactory } from 'decoratories';

const propertyDecorator = () => propertyDecoratorFactory();

class Example {
    
    @propertyDecorator
    protected property: string;

    get accessor(): string {
        return this.property;
    }

    method(parameter: string): void {}         
}
```

### Class decorator

```typescript
import { classDecoratorFactory } from 'decoratories';

const classDecorator = () => classDecoratorFactory();

@classDecorator
class Example {
    
    protected property: string;

    get accessor(): string {
        return this.property;
    }

    method(parameter: string): void {}         
}
```

## Examples