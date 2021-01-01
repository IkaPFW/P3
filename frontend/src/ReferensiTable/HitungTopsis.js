import CCard from "../../coreui-react-master/src/card/CCard";
import CCardHeader from "../../coreui-react-master/src/card/CCardHeader";
import CCardBody from "../../coreui-react-master/src/card/CCardBody";
import CDataTable from "../../coreui-react-master/src/table/CDataTable";

import React, { useState, useEffect } from "react";
import axios from "axios";

const HitungTopsis = (props) => {
  const [alter, setAlterName] = useState([]);
  const [normalized, topsisNormalized] = useState([]);
  const [optimized, optimasi] = useState([]);
  const [idpos, idealPositive] = useState([]);
  const [idneg, idealNegative] = useState([]);
  const [altpos, alternativePositive] = useState([]);
  const [altneg, alternativeNegative] = useState([]);
  const [rank, ranking] = useState([]);

  useEffect(() => {
    getAlterName();
    checkData();
  }, [alter]);

  const checkData = () => {
    axios.get(`http://localhost:8086/api/topsis/`).then((res) => {
      let data = res.data;
      let newdata = Object.keys(data).forEach((d) => {
        if (d === "topsisNormalized") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({
                nama_barang: alter[b].nama_barang,
                harga: i[0],
                garansi: i[1],
              });
            }
          });
          topsisNormalized(objek);
        } else if (d === "optimasi") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({
                nama_barang: alter[b].nama_barang,
                harga: i[0],
                garansi: i[1],
              });
            }
          });
          optimasi(objek);
        } else if (d === "idPos") {
          let objek = [{}];
          data[d].forEach((i, b) => {
            objek[0]["C" + (b + 1)] = i;
          });
          idealPositive(objek);
        } else if (d === "idNeg") {
          let objek = [{}];
          data[d].forEach((i, b) => {
            objek[0]["C" + (b + 1)] = i;
          });
          idealNegative(objek);
        } else if (d === "altPos") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({ alternatif: alter[b].nama_barang, jarak: i });
            }
          });
          alternativePositive(objek);
        } else if (d === "altNeg") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({ alternatif: alter[b].nama_barang, jarak: i });
            }
          });
          alternativeNegative(objek);
        } else if (d === "rank"){
          let objek = [];
          data[d].forEach((i, b) => {
            if(alter[b] !== undefined){
              objek.push({
                rank: i.rank, value: i.value
              });
            }
          });
          ranking(objek);
        } else {
          let objek = [];
          data[d].forEach((i, b) => {
            if(alter[b] !== undefined){
              objek.push({
                nama_barang: alter[b].nama_barang,
                harga: alter[b].harga,
                garansi: alter[b].garansi
              });
            }
          });
        }
      });
      //console.log(data);
      //console.log(Object.keys(data));
    });
  };

  const getAlterName = () => {
    axios.get(`http://localhost:8086/api/catalogue/`).then((res) => {
      let alt = res.data.result;
      setAlterName(alt);
    });
  };

  const fields = [
    "nama_barang",
    "harga",
    "garansi",
  ];
  const fieldsAlt = ["alternatif", "jarak"];
  const ideal = ["C1", "C2"];
  const rankAlt = ["rank", "value"];

  return (
    <div className="animated fadeIn">
      <CCard>
        <CCardHeader>
          {/* <Button color="danger" onClick={toggle}> BUTTON
              {buttonLabel}
            </Button> */}
          <h2 className="text-center">Perhitungan Topsis</h2>
          <br />
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
      </CCard>
      <CCard>
        <CCardHeader>
          Data Awal
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
            <CDataTable items={alter} fields={fields} pagination/>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Normalisasi
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={normalized} fields={fields} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Normalisasi Bobot
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={optimized} fields={fields} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Ideal Positif
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={idpos} fields={ideal} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Ideal Negatif
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={idneg} fields={ideal} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Jarak Alternatif Positif
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={altpos} fields={fieldsAlt} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Jarak Alternatif Negatif
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={altneg} fields={fieldsAlt} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Ranking
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={rank} fields={rankAlt} pagination />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default HitungTopsis;

// }
