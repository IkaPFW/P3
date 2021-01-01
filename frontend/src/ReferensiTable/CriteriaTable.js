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
  
  const Criteria = (props) => {
    const { buttonLabel, className } = props;
  
    const [modal, setModal] = useState(false);
    const [list, setDataAlter] = useState([]);
    const [array, setNewAlter] = useState({
      id_criteria: null,
      kode: "",
      kriteria: "",
      atribut: "",
      bobot: ""
    });
  
    const toggle = () => setModal(!modal);
  
    const handleChange = (value, name) => {
      setNewAlter({ ...array, [name]: value });
    };
  
    const addAlter = (array) => {
      axios.post(`http://localhost:8086/api/criteria`, array).then((res) => {
        toggle();
      });
    };
  
    useEffect(() => {
      checkData();
    }, [list]);
  
    const checkData = async () => {
      axios.get(`http://localhost:8086/api/criteria/`).then((res) => {
        let alt = res.data.result;
        setDataAlter(alt);
      });
    };
  
    const fields = [
      "id_criteria",
      "kode",
      "kriteria",
      "atribut",
      "bobot"
    ];
  
    return (
      <div className="animated fadeIn">
        <CCard>
          <CCardHeader>
            {/* <Button color="danger" onClick={toggle}> BUTTON
              {buttonLabel}
            </Button> */}
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Input Data Kriteria</ModalHeader>
              <ModalBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Kode Kriteria</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan Kode Kriteria"
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
                      <CLabel htmlFor="text-input">Nama Kriteria</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan  Nama Kriteria"
                        type="text"
                        onChange={(event) =>
                          handleChange(event.target.value, "kriteria")
                        }
                        defaultValue={props.kriteria}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">Atribut</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CSelect
                        custom
                        name="select"
                        id="select"
                        onChange={(event) =>
                          handleChange(event.target.value, "atribut")
                        }
                        defaultValue={props.atribut}
                      >
                        <option value="sesuai">Sesuai</option>
                        <option value="tidak sesuai">Tidak Sesuai</option>
                      </CSelect>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Bobot</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan bobot"
                        type="text"
                        pattern="[0-9]*"
                        onChange={(event) =>
                          handleChange(event.target.value, "bobot")
                        }
                        defaultValue={props.bobot}
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
  
            <h2 className="text-center">Tabel Kriteria</h2>
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
  
  export default Criteria;
  
  // }
  