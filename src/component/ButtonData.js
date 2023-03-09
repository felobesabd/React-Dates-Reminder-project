import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
const ButtonData = ({deleterem, show}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm='8' className='d-flex justify-content-between'>
        <Button onClick={show} className="button-style">عرض المواعيد</Button>
        <Button onClick={deleterem} className="button-style">مسح الكل</Button>
    </Col>
</Row>
  )
}

export default ButtonData;

