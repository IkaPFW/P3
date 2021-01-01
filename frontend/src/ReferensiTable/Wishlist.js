/*eslint-disable*/
import React from 'react';
import {Table, Row, Col, CardBody, CardHeader, Card, Button} from "reactstrap";
export default class Wishlist extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="animated fadeIn">
                <Row>
                    <Col>
                    <Card>
                        <CardHeader>
                            <h4>Wishlist</h4>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Kategori</th>
                                        <th>Harga</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </Table>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}