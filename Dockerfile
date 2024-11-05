# Menggunakan image node resmi versi alpine untuk ukuran lebih kecil
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin semua file dari proyek ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Ekspos port 3000 untuk aplikasi Next.js
EXPOSE 3000

# Jalankan aplikasi Next.js dalam mode produksi
CMD ["npm", "start"]
