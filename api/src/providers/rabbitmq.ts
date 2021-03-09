import amqp from 'amqplib'

let channel
let connection
let assert

const microservice = async (queue: string) => {
  try {
    connection = await amqp.connect('amqp://localhost:5672')
    channel = await connection.createChannel()
    assert = await channel.assertQueue(queue, { exclusive: true })
  } catch (err) {
    throw new Error(err)
  }
}

export { microservice, channel, connection, assert }
