import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'; // Import Reactstrap components

class SuperAdminDashboard extends Component {
  render() {
    return (
      <Container fluid>
        <h1 className="mb-4">Super Admin Dashboard</h1>

        <Row>
          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle>Users Overview</CardTitle>
                <CardText>Overview of users...</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle>Settings</CardTitle>
                <CardText>Super admin settings...</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle>Analytics</CardTitle>
                <CardText>Analytics for super admins...</CardText>
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
                <CardText>Notifications for super admins...</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SuperAdminDashboard;
