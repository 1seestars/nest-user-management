import { ConfigModuleOptions } from '@nestjs/config';

export const configModuleOptions: ConfigModuleOptions = {
  envFilePath: `.env.${process.env.NODE_ENV}`,
};
