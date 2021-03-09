import amqp from 'amqplib'

let channel

const microservice = async (queue: string) => {
  try {
    const connection = await amqp.connect('amqp://localhost:5672')
    channel = await connection.createChannel()
    await channel.assertQueue(queue)
  } catch (err) {
    throw new Error(err)
  }
}

export { microservice, channel }
