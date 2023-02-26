import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function User() {
  return (
    <div className="page">
      <p className="title3 tcenter">Vehicle No</p>
      <p className="title2 tcenter">NW BCG 2072</p>
      <div className="sideShadowBoxfull">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
          </div>
          <div>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="sideShadowBoxfull">
        <p className="title2 tcenter">Add Fuel Request</p>
        <br />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <FormControl sx={{ m: 1, minWidth: 330 }} size="small">
              <InputLabel id="demo-select-small">Province</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
              >
                <MenuItem value={10}>North Province</MenuItem>
                <MenuItem value={20}>North Western Province</MenuItem>
                <MenuItem value={30}>Eastern Province</MenuItem>
                <MenuItem value={30}>North Central Province</MenuItem>
                <MenuItem value={30}>Central Province</MenuItem>
                <MenuItem value={30}>Southern Province</MenuItem>
                <MenuItem value={30}>Sabaragamuwa Province</MenuItem>
                <MenuItem value={30}>Uwa Province</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 330 }} size="small">
              <InputLabel id="demo-select-small">District</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
              >
                <MenuItem value={10}>Puttalam District</MenuItem>
                <MenuItem value={20}>Kurunegala District</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 330 }} size="small">
              <InputLabel id="demo-select-small">Region</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
              >
                <MenuItem value={10}>Wennappuwa</MenuItem>
                <MenuItem value={20}>Chilaw</MenuItem>
                <MenuItem value={30}>Anamaduwa</MenuItem>
                <MenuItem value={30}>Puttalam</MenuItem>
                <MenuItem value={30}>Nattandiya</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 330 }} size="small">
              <InputLabel id="demo-select-small">Filling station</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
              >
                <MenuItem value={100}>
                  Madampe old town (Harsha W.) - IOC
                </MenuItem>
                <MenuItem value={100}>
                  Madampe Silver town (Harsha W.) - IOC
                </MenuItem>
                <MenuItem value={100}>
                  Mahawewa Filling Station - Ceypetco
                </MenuItem>
                <MenuItem value={100}>
                  Ajith Putha Filling Station - Ceypetco
                </MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <p className="title1 tcenter">OR</p>
            <p className="title3 tcenter">
              Send <span style={{ color: "#5733ad" }}>Req_515151_bcg2072</span>{" "}
              to <span style={{ color: "#5733ad" }}>12345</span>
            </p>
            <br />
            <a style={{ textDecoration: "none" }}>
              <p
                className="btn2"
                style={{ width: "300px", marginLeft: "205px" }}
              >
                Add Request Request
              </p>
            </a>
          </div>
        </div>
      </div>
      <a href="/qrscanview" style={{ textDecoration: "none" }}>
        <p className="btn2">View QR Code</p>
      </a>
    </div>
  );
}
