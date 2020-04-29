import * as classFactory from "./class";

describe('Class decorator factory test suite', () => {

    describe('General expectations', () => {
        it('should export class decorator factory function as default', () => {
            // given
            const functionType = typeof Function;

            // when
            const decoratorType = typeof classFactory.default;

            // then
            expect(decoratorType).toBe(functionType);
        });
    });

    describe('Factory functionality', () => {
        const __MOCKS__ = {
            decorator: (): string => 'A'
        };

        it('should return class decorator function', () => {
            // given
            const functionType = typeof Function;
            const decorator = classFactory.default( __MOCKS__.decorator);

            // when
            const decoratorType: string = typeof decorator;

            // then
            expect(decoratorType).toBe(functionType);
        });

        it('should execute mock function', () => {
            // given
            const spy = jest.spyOn(__MOCKS__, 'decorator');
            const decorator = classFactory.default( __MOCKS__.decorator);

            // when
            decorator();

            // then
            expect(spy).toHaveBeenCalled();
        });

    });

});