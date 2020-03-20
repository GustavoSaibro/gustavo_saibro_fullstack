import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPrimeModal from "./NewPrimeModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PrimeList extends Component {
  render() {
    const primes = this.props.primes;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Prime number:</th>            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!primes || primes.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            primes.map(prime => (
              <tr key={prime.pk}>
                <td>{prime.number}</td>                
                <td align="center">
                  <NewPrimeModal
                    create={false}
                    prime={prime}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={prime.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PrimeList;