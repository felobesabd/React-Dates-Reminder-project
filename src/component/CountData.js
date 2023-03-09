import React from 'react'
import { Col, Row } from 'react-bootstrap'

const CountData = ({count}) => {
  return (
    <Row className='justify-content-center'>
    <Col className='mb-3 line'>
    لديك {count.length} مواعيد اليوم
    </Col>
</Row>
  )
}

export default CountData;