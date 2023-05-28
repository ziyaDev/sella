import { Module } from '@nestjs/common';

import { TestController } from './test.controller';
import { TestService } from './test.service';
import { GraphQLModule } from '@nestjs/graphql';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TestResolver } from './test.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      sortSchema: true,
      driver: ApolloDriver,
      autoSchemaFile: true,
      
       
    }),
  ],
  controllers: [TestController],
  providers: [TestService,TestResolver],
})
export class TestModule {}
