import { Module } from "@nestjs/common";
import { DbConfig } from "./db.interface";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule } from "@dev/config";
import { ConfigService } from "@dev/config";
import { ConfigDatabase } from "@dev/config";

@Module({})
export class DBModule {
  private static getConnectionOptions(
    config: ConfigService,
    dbConfig: DbConfig
  ): TypeOrmModuleOptions {
    const dbData = config.get().db;

    if (!dbData) {
      throw Error("");
    }
    const connectionOptions = this.getConnectionOptionsPostgres(dbData);
    return {
      ...connectionOptions,
      entities: dbConfig.entities,
      synchronize: true,
      logging: true,
    };
  }

//todo: use config service to pick the database props

  private static getConnectionOptionsPostgres(
    dbData: ConfigDatabase
  ): TypeOrmModuleOptions {
    return {
      type: "postgres",
      url: dbData.url,
      keepConnectionAlive: true,
      username: "api",
      password: "development_pass"
    };
  }

  public static forRoot(dbConfig: DbConfig) {
    return {
      module: DBModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => {
            return DBModule.getConnectionOptions(configService, dbConfig);
          },
          inject: [ConfigService],
        }),
      ],
      controllers: [],
      providers: [],
      exports: [],
    };
  }
}
