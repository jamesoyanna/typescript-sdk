/**
 * Applies the properties and methods of the base classes to the derived class
 * @param derivedCtor - The derived class
 * @param baseCtors - An array of base classes
 */
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
        );
      });
    });
  }
  