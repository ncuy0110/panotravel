import React, { useEffect, useMemo, useState } from "react";
import "./zone-table.scss";
import zoneApi from "@/api/zone.api.js";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ZoneRow from "./zone-row/ZoneRow";

function ZoneTable() {
  const [data, setData] = useState(null);
  useEffect(() => {
    zoneApi.getAll().then((rs) => {
      console.log(rs);
      setData(rs);
    });
  }, []);

  return (
    <div className="wrapper">
      {" "}
      {data ? (
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data?.map((zone) => (<ZoneRow zone={zone} key={zone.id}/>))
              }
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </div>
  );
}

export default ZoneTable;
