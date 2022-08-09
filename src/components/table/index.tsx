import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useAppState } from "../../state";

const TableData = () => {
  const appState = useAppState();

  const tableHeader = ["First name", "Last name", "Adress", "SSN"];
  return (
    <TableContainer sx={{ maxWidth: 750 }} component={Paper}>
      <Table>
        <TableHead>
          {tableHeader &&
            tableHeader.map((name) => <TableCell>{name}</TableCell>)}
        </TableHead>
        <TableBody>
          {appState.tableData &&
            appState.tableData.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.firstName}</TableCell>

                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.ssn}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
