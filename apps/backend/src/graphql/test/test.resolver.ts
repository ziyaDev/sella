import { Resolver, Query, Args } from "@nestjs/graphql";

Resolver();
export class TestResolver {
    @Query(() => String)
    test(): string {
        return "hello from test resolver"
    }
    @Query(() => Boolean)
    testBoolean(): boolean {
        return false
    }
    @Query(() => Number)
    testNumber(): number {
        return 24
    }
    @Query(() => Boolean)
    isAdmin(@Args('id') id: string): boolean {
        if (id === '1') {
            return true
        }
        return false
    }




}