import CButton from "../../coreui-react-master/src/button/CButton";
import CCard from "../../coreui-react-master/src/card/CCard";
import CCardHeader from "../../coreui-react-master/src/card/CCardHeader";
import CCardBody from "../../coreui-react-master/src/card/CCardBody";
import CCol from "../../coreui-react-master/src/grid/CCol";
import CDataTable from "../../coreui-react-master/src/table/CDataTable";
import CForm from "../../coreui-react-master/src/form/CForm"
import CFormGroup from "../../coreui-react-master/src/form/CFormGroup";
import { CInput, CSelect} from "../../coreui-react-master/src/form/CInput";
import CLabel from "../../coreui-react-master/src/form/CLabel"
  
  import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  
  const SubCritGaransi = (props) => {
    const { buttonLabel, className } = props;
  
    const [modal, setModal] = useState(false);
    const [list, setDataAlter] = useState([]);
    const [array, setNewAlter] = useState({
      id_sub: null,
      kode: "",
      sub_kriteria: "",
      nilai: ""
    });
  
    const toggle = () => setModal(!modal);
  
    const handleChange = (value, name) => {
      setNewAlter({ ...array, [name]: value });
    };
  
    const addAlter = (array) => {
      axios.post(`http://localhost:8086/api/subcritguarantee`, array).then((res) => {
        toggle();
      });
    };
  
    useEffect(() => {
      checkData();
    }, [list]);
  
    const checkData = async () => {
      axios.get(`http://localhost:8086/api/subcritguarantee/`).then((res) => {
        let alt = res.data.result;
        setDataAlter(alt);
      });
    };
  
    const fields = [
      "id_sub",
      "kode",
      "sub_kriteria",
      "nilai"
    ];
  
    return (
      <div className="animated fadeIn">
        <CCard>
          <CCardHeader>
            {/* <Button color="danger" onClick={toggle}> BUTTON
              {buttonLabel}
            </Button> */}
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Input Data Sub Kriteria</ModalHeader>
              <ModalBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Kode Sub Kriteria</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan Kode Sub Kriteria"
                        onChange={(event) =>
                          handleChange(event.target.value, "kode")
                        }
                        defaultValue={props.kode}
                      />
                      {/* <CFormText>This is a help text</CFormText> */}
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Nama Sub Kriteria</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan  Nama Sub Kriteria"
                        type="text"
                        onChange={(event) =>
                          handleChange(event.target.value, "sub kriteria")
                        }
                        defaultValue={props.sub_kriteria}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Nilai</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan nilai"
                        type="text"
                        pattern="[0-9]*"
                        onChange={(event) =>
                          handleChange(event.target.value, "nilai")
                        }
                        defaultValue={props.nilai}
                      />
                    </CCol>
                  </CFormGroup>
                </CForm>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => addAlter(array)}>
                  Simpan
                </Button>{" "}
                <Button color="danger" onClick={toggle}>
                  Batal
                </Button>
              </ModalFooter>
            </Modal>
  
            <h2 className="text-center">Tabel Sub Kriteria Garansi</h2>
            <br />
            <CButton color="success" onClick={toggle}>
              +Tambah{buttonLabel}
            </CButton>
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable items={list} fields={fields} pagination />
          </CCardBody>
        </CCard>
      </div>
    );
  };
  
  export default SubCritGaransi;
  
  // }
  