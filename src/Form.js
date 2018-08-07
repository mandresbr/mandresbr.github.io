import React, { Component } from 'react';

import { Container, Row, Col, Input, Button } from 'mdbreact';

class Form extends React.Component  {
  render() {
    return(
      return <form>
      <TextField
        label="Title"
        value={title}
        onChange={this.handleChange('title')}
        margin="normal"
        className={classes.FormControl}
      />
      <br />
      <TextField
        multiline
        rows="4"
        label="Description"
        value={description}
        onChange={this.handleChange('description')}
        margin="normal"
        className={classes.FormControl}
      />
      <br />
      <Button
        color="primary"
        variant="raised"
        onClick={this.handleSubmit}
      >
        /*{exercise ? 'Edit' : 'Create'}*/
      </Button>
    </form>
    );
  }
};

export default Form;