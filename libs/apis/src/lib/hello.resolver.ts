import { Query, Resolver, Args } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query()
  hello(@Args('input') input: string): string {
    return `Hello, ${input}!`;
  }
}
