/**
 * Created by rafal on 28/02/2017.
 */
import React, { Component } from 'react';
import { Row, Col, FormGroup} from 'react-bootstrap';


class SliderDuration extends Component {
    render(){
        return(
            <FormGroup>
                <Row>
                    <Col  sm={12}>
                        <Row>
                            <Col className="labelSlider" sm={4}>
                                Durée
                            </Col>
                            <Col className="descSlider" sm={6}>
                                Quelle est la durée de votre emprunt ?
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={12}>
                        <input
                            id="sliderDuration"
                            type="range"
                            value={this.props.value}
                            min={this.props.min}
                            max={this.props.max}
                            onChange={this.props.onChange}
                            step={this.props.step} />

                        <div id="amountValueDisplay">{this.props.value} mois</div>
                    </Col>
                </Row>
            </FormGroup>

        )
    }
}

export default SliderDuration