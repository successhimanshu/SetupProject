import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'; // Example using Reactstrap for styling

export class AdminDashboard extends Component {
  render() {
    return (
      <Container fluid>
        <h1 className="mb-4">Admin Dashboard</h1>

        <Row>
          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle>Statistics</CardTitle>
                <CardText>Some statistics here...</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle>Recent Orders</CardTitle>
                <CardText>List of recent orders...</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle>Analytics</CardTitle>
                <CardText>Analytics charts...</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Card>
              <CardBody>
                <CardTitle>Reports</CardTitle>
                <CardText>Various reports...</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle>Notifications</CardTitle>
                <CardText>Notifications list...</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminDashboard;
