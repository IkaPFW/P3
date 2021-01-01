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
  
  const Catalogue = (props) => {
    const { buttonLabel, className } = props;
  
    const [modal, setModal] = useState(false);
    const [list, setDataAlter] = useState([]);
    const [array, setNewAlter] = useState({
      id_barang: null,
      nama_barang: "",
      kategori: "",
      merk: "",
      harga: "",
      garansi: ""
    });
  
    const toggle = () => setModal(!modal);
  
    const handleChange = (value, name) => {
      setNewAlter({ ...array, [name]: value });
    };
  
    const addAlter = (array) => {
      axios.post(`http://localhost:8086/api/catalogue`, array).then((res) => {
        toggle();
      });
    };
  
    useEffect(() => {
      checkData();
    }, [list]);
  
    const checkData = async () => {
      axios.get(`http://localhost:8086/api/catalogue/`).then((res) => {
        let alt = res.data.result;
        setDataAlter(alt);
      });
    };
  
    const fields = [
      "id_barang",
      "nama_barang",
      "kategori",
      "merk",
      "harga",
      "garansi"
    ];
  
    return (
      <div className="animated fadeIn">
        <CCard>
          <CCardHeader>
            {/* <Button color="danger" onClick={toggle}> BUTTON
              {buttonLabel}
            </Button> */}
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Input Data Barang</ModalHeader>
              <ModalBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Nama Barang</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan Nama Barang"
                        onChange={(event) =>
                          handleChange(event.target.value, "nama_barang")
                        }
                        defaultValue={props.nama_barang}
                      />
                      {/* <CFormText>This is a help text</CFormText> */}
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Kategori Barang</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan kategori barang"
                        type="text"
                        onChange={(event) =>
                          handleChange(event.target.value, "kategori")
                        }
                        defaultValue={props.kategori}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Merk</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Masukkan merk barang"
                        type="text"
                        onChange={(event) =>
                          handleChange(event.target.value, "merk")
                        }
                        defaultValue={props.kategori}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">Harga</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CSelect
                        custom
                        name="select"
                        id="select"
                        onChange={(event) =>
                          handleChange(event.target.value, "harga")
                        }
                        defaultValue={props.harga}
                      >
                        <option value="Lebih dari 200.000">Lebih dari 200.000</option>
                        <option value="Antara 100.000 dan 200.000">Antara 100.000 dan 200.000</option>
                        <option value="Antara 50.000 dan 100.000">Antara 50.000 dan 100.000</option>
                        <option value="Antara 25.000 dan 50.000">Antara 25.000 dan 50.000</option>
                        <option value="Kurang dari 25.000">Kurang dari 25.000</option>
                      </CSelect>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">Garansi</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CSelect
                        custom
                        name="select"
                        id="select"
                        onChange={(event) =>
                          handleChange(event.target.value, "garansi")
                        }
                        defaultValue={props.garansi}
                      >
                        <option value="Kurang dari atau selama 2 tahun">Kurang dari atau selama 2 tahun</option>
                        <option value="3 tahun">3 tahun</option>
                        <option value="4 tahun">4 tahun</option>
                        <option value="5 tahun">5 tahun</option>
                        <option value="Lebih dari 5 tahun">Lebih dari 5 tahun</option>
                      </CSelect>
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
  
            <h2 className="text-center">Tabel Katalog Barang</h2>
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
  
  export default Catalogue;
  
  // }
  