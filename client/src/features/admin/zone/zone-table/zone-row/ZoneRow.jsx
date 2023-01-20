import {
  CollectionsOutlined,
  DeleteOutline,
  ModeEditOutline,
} from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./zone-row.scss";

function ZoneRow({ zone }) {
  const navigate = useNavigate();
  return (
    <TableRow className="row">
      <TableCell className="cell" align="center">
        {zone.id}
      </TableCell>
      <TableCell className="cell" align="left">
        {zone.name}
      </TableCell>
      <TableCell className="cell" align="left">
        {zone.address}
      </TableCell>
      <TableCell className="cell" align="left">
        {zone.location}
      </TableCell>
      <TableCell className="cell" align="left">
        {zone.description}
      </TableCell>
      <TableCell align="center">
        <div className="action">
          <div className="item">
            <CollectionsOutlined
              className="icon"
              onClick={() => navigate(`/dashboard/zone/${zone.id}/image`)}
            />
          </div>
          <div className="item">
            <ModeEditOutline className="icon" />
          </div>
          <div className="item">
            <DeleteOutline className="icon"/>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default ZoneRow;
