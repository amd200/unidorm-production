import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/profileAction";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function RecentRequests() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profileReducer.user);
  const dt = useRef(null);

  useEffect(() => {
    dispatch(getUser(JSON.parse(localStorage.getItem("user")).userId));
  }, [dispatch]);

  useEffect(() => {
    if (data && data.user && data.user.requests && data.user.requests.length > 0) {
      setProducts(data.user.requests);
    }
  }, [data]);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(date).toLocaleDateString("en-GB", options);
    return formattedDate;
  };

  const renderHeader = () => (
    <div className="d-flex align-items-center justify-content-between flex-wrap">
      <h3 className="name-table">Recent Requests</h3>
      <div className="d-flex align-items-center gap-2">
        <Button type="button" icon="pi pi-file" rounded data-pr-tooltip="CSV" />
        <Button type="button" icon="pi pi-file-excel" severity="success" rounded data-pr-tooltip="XLS" />
        <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded data-pr-tooltip="PDF" />
      </div>
    </div>
  );

  const actionBodyTemplate = (rowData) => (
    <div className="d-flex justify-content-center gap-2">
      <Button icon="pi pi-eye" rounded severity="info" size="small" onClick={() => viewRequest(rowData)} tooltip="View Request" tooltipOptions={{ position: "top" }} style={buttonStyle} />
      <Button icon="pi pi-pencil" rounded severity="warning" size="small" onClick={() => editRequest(rowData)} tooltip="Edit Request" tooltipOptions={{ position: "top" }} style={buttonStyle} />
      <Button icon="pi pi-trash" rounded severity="danger" size="small" onClick={() => deleteRequest(rowData)} tooltip="Delete Request" tooltipOptions={{ position: "top" }} style={buttonStyle} />
    </div>
  );

  const buttonStyle = {
    fontSize: "0.7rem",
    padding: "0.2rem 0.4rem",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
  };

  const viewRequest = (rowData) => console.log("View Request:", rowData);
  const editRequest = (rowData) => console.log("Edit Request:", rowData);
  const deleteRequest = (rowData) => console.log("Delete Request:", rowData);

  return (
    <div className="recent-requests bg-white">
      <Tooltip target=".export-buttons > button" position="bottom" />
      <div className="bg-white">
        {products && (
          <DataTable selectionMode={null} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} ref={dt} value={products} header={renderHeader()} tableStyle={{ minWidth: "50rem" }}>
            <Column bodyStyle={{ textAlign: "center" }} selectionMode="multiple" headerStyle={{ width: "3rem" }} />
            <Column bodyStyle={{ width: "10rem", textAlign: "center" }} field="name" header="Name" sortable />
            <Column bodyStyle={{ width: "10rem", textAlign: "center" }} field="email" header="Email" sortable />
            <Column bodyStyle={{ width: "10rem", textAlign: "center" }} field="fromDate" header="From Date" sortable body={(rowData) => formatDate(rowData.fromDate)} />
            <Column bodyStyle={{ width: "10rem", textAlign: "center" }} field="toDate" header="End Date" sortable body={(rowData) => formatDate(rowData.toDate)} />
            <Column bodyStyle={{ width: "10rem", textAlign: "center" }} field="message" header="Message" sortable />
            <Column headerClassName="d-flex align-items-center justify-content-center mt-2 bg-transparent" bodyStyle={{ width: "5rem", textAlign: "center" }} body={actionBodyTemplate} header="Actions" />
          </DataTable>
        )}
      </div>
    </div>
  );
}

export default RecentRequests;
