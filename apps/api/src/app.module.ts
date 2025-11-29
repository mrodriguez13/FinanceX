import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './config/database.module';
import { UserModule } from './modules/users/user.module';
import { AccountModule } from './modules/accounts/account.module';
import { TransactionModule } from './modules/transactions/transaction.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UserModule,
    AccountModule,
    TransactionModule,
  ],
})
export class AppModule {}
