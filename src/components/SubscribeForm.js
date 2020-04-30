import React from 'react'
import { Form, Input, Button } from 'antd'
import { sendEmail } from '../utils/email'

const SubscribeForm = props => {
  const [form] = Form.useForm()

  const { onSubscribe: onSubscribeProp } = props

  const onSubscribe = async values => {
    const { email } = values

    const html = `El email ${email} desea subscribirse`

    try {
      await sendEmail({
        from: 'no-reply@kinevr.com',
        to: [{ email: 'legan@cleveritgroup.com', name: 'Nuevo KineVR!' }],
        html,
        text: html,
        subject: `Subscripción a newsletter`,
      })
    } catch (error) {
      console.error('error: ', error)
    } finally {
      onSubscribeProp()
    }
  }

  return (
    <Form form={form} name="register" onFinish={onSubscribe}>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: '¡El email no es válido!',
          },
          {
            required: true,
            message: 'Por favor, indique su correo.',
          },
        ]}
      >
        <Input style={{ margin: '5% 0' }} placeholder="tucorreo@email.com" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="feedbackBtn">
          Subscribirse
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SubscribeForm
