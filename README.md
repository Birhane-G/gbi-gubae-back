# GBI GUBAE – Backend

This is the backend service for the **GBI GUBAE** Student Information Management System, built with:

- **[NestJS](https://nestjs.com/)** – A progressive Node.js framework
- **[TypeORM](https://typeorm.io/)** – ORM for TypeScript
- **PostgreSQL** – Relational database
- **Swagger** – For API documentation

---

## 📁 Folder Structure

```
src/
└── ├── config/
    ├── database/
    ├── entities/            # All database entities
    ├── modules/
    │   ├── account/         # Account module (controller, service, DTO, entity)
    │   ├── auth/            # Users module (controller, service, entity)
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   └── main.ts           # App entry point
    ├── test/                 # (optional) test files
    └── ...                   # build/dist/config files
```

---

## 🛠️ Tech Stack

| Tool            | Description                     |
|-----------------|---------------------------------|
| NestJS          | Backend application framework   |
| TypeORM         | Type-safe SQL ORM               |
| PostgreSQL      | Relational database             |
| Swagger         | API Documentation               |
| TypeScript      | Static typing                   |

---

## 🚀 Getting Started

### 1. 📦 Install Dependencies

```bash
npm install
```

> Run this from the root (`gbi-gubae-back`) directory.

---

### 2. 🧪 Environment Variables

Create a `.env` file :

### 3. 🔄 Database Migrations (TypeORM)

To generate a migration (if needed):

```bash
npm run migration:generate --name=nameOfMigration
```

To run migrations:

```bash
npm run migration:run
```

---

### 4. 🏁 Run the Server

```bash
npm run start
```

---

## 📚 Swagger API Docs

Once running, access the docs at:

```
http://localhost:8000/api
```

---

## ✨ How to Create a New Module (Controller, Service, DTO)

### Step-by-Step

```bash
# Step 1: Create a folder
mkdir src/<your-module>

# Step 2: Create the files:
touch src/modules/<your-module>/<your-module>.controller.ts
touch src/modules/<your-module>/<your-module>.service.ts
touch src/modules/<your-module>/<your-module>.dto.ts
touch src/modules/<your-module>/<your-module>.module.ts
touch src/entities/<your-entity>.entity.ts
```

###  Module

```bash
nest g module module/<modulename>
```
###  Service

```bash
nest g service module/<modulename>
```

###  Controller
```bash
nest g controller module/<modulename>
```

### Example Module Registration

In `app.module.ts`:

```ts
import { YourModuleModule } from './your-module/your-module.module';

@Module({
  imports: [YourModuleModule],
})
export class AppModule {}
```

---

## 🧹 Scripts

```bash
npm run start    
npm run typeorm -- -d src/data-source.ts migration:run     # Run TypeORM migration
npm run typeorm -- -d src/data-source.ts migration:generate ./migrations/MyMigrationName  # Generate migration
```

---

## 🤝 Contributing

Feel free to add more services, modules, or improve the entities.

---

## 📄 License

MIT License