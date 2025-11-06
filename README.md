## Cara Setup Project

((==#_[Normal User]_#==))
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

= = = = = = = = = = = = = = =

((==#_[Docker User]_#==))

1. Setup file environment 
    cp .env.example .env

2. > **di file .env ubah pengaturan database :**  
    > DB_CONNECTION=mysql  
    > DB_HOST=127.0.0.1  

3. Jalankan Container (Build dan Setup):
    docker compose up -d --build

4. Instal Dependencies & Inisialisasi:
    # Instal Composer Dependencies
    docker exec -it zenith-app-1 composer install

    # Instal Node.js Dependencies (Vite)
    docker exec -it zenith-app-1 npm install

    # Generate APP_KEY
    docker exec zenith-app-1 php artisan key:generate

    # Set Izin File Storage
    docker exec zenith-app-1 chmod -R 777 storage bootstrap/cache

5. Inisialisasi dan Migrasi:
    # Migrasi Database:
    docker exec zenith-app-1 php artisan migrate

6. Kompilasi Assets (Production/First Run):
    # Hasilkan file manifest.json agar aplikasi dapat dimuat tanpa menjalankan dev server.
    docker exec -it zenith-app-1 npm run build

= = = = = = = = =
 
🌎 Akses Layanan (bisa dicek di docker-compose.yml)
**Aplikasi Laravel** | `http://localhost:8000`
**Database Manager** | `http://localhost:8080`

`docker compose up -d`  | Menjalankan container
`docker compose stop`   | Menghentikan semua *container* tanpa menghapus data database (Volume).


