import React, { Component } from 'react';

import { Container, Row, Col, Input, Button } from 'mdbreact';

class Form extends React.Component  {
  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <Input label="Número de vuelo" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="Fecha de Salida" icon="date_range" group type="date" validate/>
              </div>
              <div className="text-center">
                <Button color="primary">Buscar</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Form;