import * as propertyFactory from "./property";

describe('Property decorator factory test suite', () => {

    describe('General expectations', () => {
        it('should export property decorator factory function as default', () => {
            // given
            const functionType = typeof Function;

            // when
            const decoratorType = typeof propertyFactory.default;

            // then
            expect(decoratorType).toBe(functionType);
        });
    });

    describe('Factory functionality', () => {
        const __MOCKS__ = {
            decorator: (): string => 'A'
        };

        it('should return property decorator function', () => {
            // given
            const functionType = typeof Function;
            const decorator = propertyFactory.default( __MOCKS__.decorator);

            // when
            const decoratorType: string = typeof decorator;

            // then
            expect(decoratorType).toBe(functionType);
        });

        it('should execute mock function', () => {
            // given
            const spy = jest.spyOn(__MOCKS__, 'decorator');
            const decorator = propertyFactory.default( __MOCKS__.decorator);

            // when
            decorator();

            // then
            expect(spy).toHaveBeenCalled();
        });

    });

});