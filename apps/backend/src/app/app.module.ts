import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HelloResolver } from '../graphql/ resolvers/hello.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/graphql/schemas/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
       
    }),
  ],
  controllers: [AppController],
  providers: [AppService,HelloResolver],
})
export class AppModule {}
