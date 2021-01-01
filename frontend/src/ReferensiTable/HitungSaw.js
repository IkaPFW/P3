import CCard from "../../coreui-react-master/src/card/CCard";
import CCardHeader from "../../coreui-react-master/src/card/CCardHeader";
import CCardBody from "../../coreui-react-master/src/card/CCardBody";
import CDataTable from "../../coreui-react-master/src/table/CDataTable";

import React, { useState, useEffect } from "react";
import axios from "axios";

const HitungSAW = (props) => {
  const [alter, setAlterName] = useState([]);
  const [normalized, sawNormalized] = useState([]);
  const [optimized, optimationWeight] = useState([]);
  const [rank, ranking] = useState([]);

  useEffect(() => {
    getAlterName();
    checkData();
  }, [alter]);

  const checkData = () => {
    axios.get(`http://localhost:8086/api/saw/`).then((res) => {
      let data = res.data;
      let newdata = Object.keys(data).forEach((d) => {
        if (d === "sawNormalization") {
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
          sawNormalized(objek);
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
          optimationWeight(objek);
        } else if (d === "rank") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({
                rank: i.rank,
                value: i.value
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
    });
  };

  const getAlterName = () => {
    axios.get(`http://localhost:8086/api/catalogue/`).then((res) => {
      let alt = res.data.result;
      setAlterName(alt);
      console.log(rank)
    });
  };

  const fields = [
    "nama_barang",
    "harga",
    "garansi",
  ];
  const rankSaw = ["rank", "value"];

  return (
    <div className="animated fadeIn">
      <CCard>
        <CCardHeader>
          {/* <Button color="danger" onClick={toggle}> BUTTON
              {buttonLabel}
            </Button> */}
          <h2 className="text-center">Perhitungan SAW</h2>
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
          <CDataTable items={alter} fields={fields} pagination />
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
          Ranking
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={rank} fields={rankSaw} pagination />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default HitungSAW;

// }
