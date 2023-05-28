import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello from hello';
  }

  @Query(() => String)
  helloInput(@Args('name') name: string): string {
    return `Hello, ${name}!`;
  }
  
    
@Query(() => Boolean)
  test(): boolean {
    return false;
  }
}
