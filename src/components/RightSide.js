/**
 * Created by rafal on 28/02/2017.
 */
import React, { Component } from 'react';
import {Button, ButtonGroup, Col} from 'react-bootstrap';


class RightSide extends Component {
    render() {
        return (
            <Col className="rightSide" xs={12} md={6}>
                <h4>Remboursement total</h4>
                <span  className="totalAmountDisplay">{this.props.currancy}{this.props.amount}</span>

                <h4>Remboursement mensuel</h4>
                <span className="monthlyInstDisplay">{this.props.currancy}{this.props.monthly}</span>

                <h4>Taux</h4>
                <span className="aprDisplay">{this.props.APR}%</span>

                <h4>Votre historique de crédit</h4>

                <ButtonGroup justified>
                    <Button   bsStyle="success" id="Excellent" onClick={this.props.btnOnClick} >Excellent</Button>
                    <Button   bsStyle="success" id="Good" onClick={this.props.btnOnClick} >Bon</Button>
                    <Button   bsStyle="success" id="Fair" onClick={this.props.btnOnClick}>Limite</Button>
                </ButtonGroup>

            </Col>

        )
    }
}

export default RightSide;