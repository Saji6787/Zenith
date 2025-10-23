# Dockerfile
FROM php:8.3-fpm-alpine

# Instal dependensi sistem yang dibutuhkan
RUN apk add --no-cache \
    $PHPIZE_DEPS \
    autoconf \
    mysql-client \
    git \
    build-base \
    libxml2-dev \
    oniguruma-dev \
    && docker-php-ext-install pdo pdo_mysql opcache

# Install nodejs
RUN apk add --no-cache nodejs npm

# Instal Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set direktori kerja (Working Directory)
WORKDIR /var/www/html

# Ganti user dan group (Penting untuk izin file di Linux)
# Gunakan ID 1000 secara default, yang umum di Arch/Linux.
ARG PUID=1000
ARG PGID=984
RUN addgroup -g $PGID appgroup && adduser -G appgroup -u $PUID -D appuser

# Atur izin file untuk Laravel
RUN chown -R appuser:appgroup /var/www/html

USER appuser