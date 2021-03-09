import 'dotenv/config'

import { microservice, channel } from '@providers/rabbitmq'

(async () => {
  try {
    await microservice('rpc_calc')
    channel.consume('rpc_calc', async (msg) => {
      const data = JSON.parse(msg.content)
      const total = data.num1 * data.num2
      channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(total)), {
        correlationId: msg.properties.correlationId
      })
      channel.ack(msg)
    }, { noAck: false })
  } catch (err) {
    console.log(err)
  }
})()
