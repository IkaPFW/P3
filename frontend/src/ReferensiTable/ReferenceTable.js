/*eslint-disable*/
import React from 'react';
import {Table, Row, Col, CardBody, CardHeader, Card, Button} from "reactstrap";
export default class ReferenceTable extends React.Component{
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
                            Header
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
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Busi Mobil Iridium DENSO</td>
                                        <td>Busi</td>
                                        <td>Rp. 125.000</td>
                                        <td>
                                            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                                <Button block color="info" className="btn-pill">Edit</Button>
                                            </Col>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}