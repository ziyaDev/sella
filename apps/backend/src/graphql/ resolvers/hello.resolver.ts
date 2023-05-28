import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }

  @Query(() => String)
  helloInput(@Args('name') name: string): string {
    return `Hello, ${name}!`;
  }
  
    
    @Query(() => String)
  test(): string {
    return 'khalilo';
  }
}
