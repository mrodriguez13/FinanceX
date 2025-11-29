# Arquitectura de FinanciaX

## 1. Arquitectura de Sistema

```text
[Client SPA]
    |
[API Gateway / BFF]
    |
[Backend Core (NestJS)] -- publishes --> [RabbitMQ/Kafka]
    |                   \-- OpenTelemetry --> [Prometheus/Grafana]
    |                    \- S3 uploads --> [Object Storage]
    |                    \- DB writes --> [MySQL 8 (InnoDB)]
    |
    +-- Auth Service (JWT + Refresh rotation + Argon2)
    +-- Domain Modules (Accounts, Transactions, Budgets, Loans, Investments, Taxes, Reports)

[ETL Importer Microservice] --consumes--> [Broker] --stores--> [MySQL] --stores--> [S3 attachments]
[ML Microservice] <-> [Broker] <-> [Backend Core] <-> [MySQL] / [S3]
[Importer Parsers (PDF/XLSX/OFX/CSV)] -> [Normalization] -> [Duplicate detection] -> [transactions.imported event]
```

## 2. Componentes Backend Core

```text
AppModule
  ├─ ConfigModule (env-based)
  ├─ DatabaseModule (TypeORM MySQL)
  ├─ AuthModule
  ├─ UserModule
  ├─ AccountModule
  ├─ TransactionModule
  ├─ BudgetModule
  ├─ LoanModule
  ├─ InvestmentModule
  ├─ CategoryModule
  ├─ ReportModule
  └─ SharedModule

Cada módulo:
  - Controllers (REST /v1)
  - Services (casos de uso)
  - Repositories (TypeORM)
  - DTOs (class-validator)
  - Entities (TypeORM, UUID PK)
  - Use Cases (application services)
  - Domain Events (publish to broker)
```

## 3. Reglas Arquitectónicas
- Clean Architecture + DDD por bounded context.
- CQRS opcional para consultas analíticas y reportes.
- 12-factor: configuración por variables de entorno, procesos stateless, logs stdout JSON.
- Seguridad: JWT + refresh rotation, Argon2 hashing, RBAC con RolesGuard.
- Observabilidad: OpenTelemetry tracing, métricas Prometheus, dashboards Grafana.
- Mensajería: RabbitMQ/Kafka para eventos de dominio (`transactions.imported`, `ml.predicted`, `budget.threshold_exceeded`).
- Almacenamiento de archivos: MinIO/S3 para adjuntos y modelos ML.
- Estandarización de respuestas: `{ status, data, error }`.
```
