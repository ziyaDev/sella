import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloModule } from '../graphql/hello/hello.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TestModule } from '../graphql/test/test.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      sortSchema: true,
      driver: ApolloDriver,
      autoSchemaFile: true,
     
      
       
    }),
    HelloModule,
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
