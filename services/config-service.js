import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import process from 'process';
import BaseService from "./base-service.js";

import Winreg from 'winreg';

class ConfigService extends BaseService {
    
    envroiment = 'development';
    port = process.env.PORT || 3000;
    db = {
        host : process.env.DB_HOST || 'localhost',
        user : process.env.DB_USER || 'root',
        password : process.env.DB_PASS || ''
    };

    fileConfig = {};

    regKey = new Winreg({
        hive: Winreg.HKLM, // veya Winreg.HKLM (LocalMachine)
        key:  '\\Software\\RDForceServer'
    });

    constructor() {
        super();
        this.fileConfig = {};
    }

    async initialize() {
        await Promise.resolve(()=>{
            dotenv.config(); // .env dosyasını yükle
            this.envroiment = process.env.NODE_ENV || 'development';
            
            try {
                const configPath = path.join(process.cwd(), `./config/${env}.config.json`);
                fileConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
            } catch (err) {
                console.warn('Config dosyası yüklenemedi:', err.message);
            }
            
            apiKey = process.env.API_KEY || this.fileConfig.apiKey;
        });
    }

    getConfig(configKey) {
        return  process.env[configKey] ? process.env[configKey] : this.fileConfig[configKey];
    }

    async getKeyStoreConfig(configKey) {
        return await new Promise((resoulve,reject) =>{
            this.regKey.get(configKey, (err, item) => {
                if (err) {
                    console.error('KeyStore okumada hata oluştu:', err);
                    reject(err);
                } else {
                    resoulve(item.value);         
                }
            });
        }); 
    }
}


export default ConfigService;