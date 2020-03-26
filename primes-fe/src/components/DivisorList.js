import React, { Component } from "react";
import { Table } from "reactstrap";

class DivisorList extends Component {
  render() {
    const divisors = this.props.divisors;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Prime divisor:</th>            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!divisors || divisors.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            divisors.map(divisor => (
              <tr key={divisor.id}>
                <td>{divisor.number}</td>                
                <td align="center">                  
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default DivisorList;