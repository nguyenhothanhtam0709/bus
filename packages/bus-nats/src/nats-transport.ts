import type {
  CoreDependencies,
  Transport,
  TransportConnectionOptions,
  TransportInitializationOptions,
  TransportMessage
} from '@node-ts/bus-core'
import type { NatsConnection } from '@nats-io/nats-core'
import { connect } from '@nats-io/transport-node'
import type { NatsTransportConfiguration } from './nats-transport-configuration'
import { ClientNats, ServerNats } from '@nestjs/microservices'

export class NatsTransport implements Transport<any> {
  private client?: NatsConnection

  constructor(private readonly configuration: NatsTransportConfiguration) {}

  public async connect(options: TransportConnectionOptions): Promise<void> {
    this.client = await connect()
  }

  public async initialize?(
    options: TransportInitializationOptions
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async start?(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async disconnect?(): Promise<void> {
    await this.client?.close()
  }

  public async stop?(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async dispose?(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async fail(transportMessage: unknown): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async readNextMessage(): Promise<TransportMessage<any> | undefined> {
    throw new Error('Method not implemented.')
  }

  public async deleteMessage(message: TransportMessage<any>): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async returnMessage(
    message: TransportMessage<unknown>
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async prepare(coreDependencies: CoreDependencies): void {
    throw new Error('Method not implemented.')
  }
}
