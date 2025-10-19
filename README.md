## Cara Setup Project

1. composer install
2. npm install
3. cp .env.example .env
    > **di file .env ubah pengaturan database :**  
    > DB_CONNECTION=mysql  
    > DB_HOST=127.0.0.1  
    > DB_PORT=3306  
    > DB_DATABASE=zenith  
    > DB_USERNAME=root  
    > DB_PASSWORD=
    >
    > **dan untuk lokasi penyimpanan :**  
    > FILESYSTEM_DISK=public
4. php artisan key:generate
5. php artisan migrate
6. npm run dev
