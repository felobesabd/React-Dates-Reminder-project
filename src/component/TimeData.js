import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TimeData = ({data}) => {
  return (
    <Row className='justify-content-center'>
            <Col className=''>
            <div className="scenod-div p-3">
            {
                data.length ? (data.map((e) => {
                    return (
                        <div key={e.id} className="d-flex border-bottom mx-3 my-3">
                        <img className="image-style" src={e.img} alt="person"/>
                        <div className='mx-3'>
                        <p className='d-inline-block fs-4 mb-3'>{e.name}</p>
                        <p className='fs-6'>{e.time}</p>
                        </div>
                        </div>
                    )
                })) : (<h1 className="p-5 text-center">ليس لديك مواعيد اليوم</h1>)
            }
            </div>
            </Col>
            </Row>
  )
}


export default TimeData