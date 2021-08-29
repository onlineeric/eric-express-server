import { ConnectionConfig } from 'tedious';

export const getConfig = ():ConnectionConfig => {
  const config = {
    server: process.env.SS_SERVER,
    authentication: {
      type: process.env.SS_AUTH_TYPE,
      options: {
        userName: process.env.SS_AUTH_USERNAME,
        password: process.env.SS_AUTH_PASSWORD,
      },
    },
    options: {
      port: Number(process.env.SS_OPT_PORT), // Default Port
    },
  }
  
  return config;
};
