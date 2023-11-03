import ProjectSearch from '@/components/ProjectSearch';
import Layout from '@/components/Layout';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

function State() {
  return (
    <Layout>
      <Row className='mt-5'>
        <Col md={12}>
        <h1 className='text-center'>
          Our Project
        </h1>
        <ProjectSearch />
        </Col>
      </Row>
    </Layout>
  );
}

export default State;
