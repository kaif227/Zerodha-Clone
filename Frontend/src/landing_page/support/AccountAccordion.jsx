import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function AccountAccordion({name,Url}) {
    console.log(Url);
  return (
    <Accordion className="pt-1 shadow-sm accoudian"  style={{ marginBottom: '10px',border: 'none' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}   // the arrow
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography className="fs-5  pt-1">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="div">
         <ul style={{ margin: 0, paddingLeft: "20px", color: "#387ED1"}}>
            {Url.map((link, index) => (
              <li key={index}>
                <Link className="custom-bullets" href="#"style={{textDecoration:"none", color:"#387ED1",}}>{link}</Link><br /><br />
              </li>
            ))}
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
export default AccountAccordion;
