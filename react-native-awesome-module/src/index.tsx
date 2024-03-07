export { XStack, YStack } from './components/stack';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
