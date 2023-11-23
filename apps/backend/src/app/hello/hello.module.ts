import { Module } from '@nestjs/common';

import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { GraphQLModule } from '@nestjs/graphql';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloResolver } from './hello.resolver';

@Module({
  controllers: [HelloController],
  providers: [HelloService,HelloResolver],
})
export class HelloModule {}
