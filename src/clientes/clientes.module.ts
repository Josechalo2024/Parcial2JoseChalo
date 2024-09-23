import { Module } from '@nestjs/common';
import { ClientsService } from './clientes.service';
import { ClientsController } from './clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientesModule {}
