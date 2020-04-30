export const sendEmail = async ({
  from,
  to,
  html,
  text,
  subject,
  attachments,
  cb,
}) => {
  try {
    const data = {
      from,
      tos: [...to],
      subject,
      text,
      html,
      attachments,
    }

    fetch('https://cleveritpage.azurewebsites.net/api/SendEmailPage', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })
      .then(d => {})
      .catch(e => console.error(e))
  } catch (error) {
    console.error('error: ', error)
    return error
  } finally {
    cb && cb()
  }
}
