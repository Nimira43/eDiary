import { Form, Header, Segment } from "semantic-ui-react";

export default function EventForm() {
  return (
    <Segment clearing>
      <Header content='Create Event' />
      <Form>
        <Form.Field>
          <input type='text' placeholder='Event title' /> 
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Category' /> 
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' /> 
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='City' /> 
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Venue' /> 
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Date' /> 
        </Form.Field>
      </Form>
    </Segment>
  )
}
