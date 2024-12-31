import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "./service/ProductService";
import MenuProfile from "../../Components/User/MenuProfile";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/profileAction";
function RecentBookings() {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    // code: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    // name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    // category: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    // inventoryStatus: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
  });

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const dt = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.profileReducer.user);

  const cols = [
    { field: "name", header: "Name", sortable: true },
    { field: "", header: "Property Details", sortable: true },
    { field: "totalPrice", header: "Total Price", sortable: true },
    { field: "updatedAt", header: "Send At", sortable: true },
    { field: "status", header: "Request Status", sortable: true },
  ];
  useEffect(() => {
    dispatch(getUser(JSON.parse(localStorage.getItem("user")).userId));
  }, [dispatch]);

  useEffect(() => {
    if (data && data.user && data.user.orders) {
      setProducts(data.user.orders);
      console.log(data.user);
    }
  }, [data, products]);

  const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.status} severity={getProductSeverity(rowData)}></Tag>;
  };

  const getProductSeverity = (product) => {
    switch (product.status) {
      case "COMPLETED":
        return "success";

      case "PENDING":
        return "warning";

      case "Declined":
        return "danger";

      default:
        return null;
    }
  };
  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    //   import("jspdf").then((jsPDF) => {
    //     import("jspdf-autotable").then(() => {
    //       const doc = new jsPDF.default(0, 0);
    //       doc.autoTable(exportColumns, products);
    //       doc.save("products.pdf");
    //     });
    //   });
  };

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "products");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(data, fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION);
      }
    });
  };

  const renderHeader = () => {
    const value = filters["global"] ? filters["global"].value : "";

    return (
      <div className="d-flex align-items-center justify-content-between flex-wrap ">
        <h3 className="name-table mb-0">Recent Bookings</h3>
        {/* <div className='d-flex align-items-center gap-2'>
                        <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                        <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                        <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
                    </div> */}
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText type="search" value={value || ""} onChange={(e) => onGlobalFilterChange(e)} placeholder="Global Search" />
        </IconField>
      </div>
    );
  };
  const header = renderHeader();
  const onGlobalFilterChange = (event) => {
    const value = event.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
  };

  const formatRelativeDate = (date) => {
    const now = new Date();
    const inputDate = new Date(date);
    const diffInSeconds = Math.floor((now - inputDate) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);

    if (diffInSeconds < 60) {
      return ` ${diffInSeconds} seconds ago`;
    } else if (diffInMinutes < 60) {
      return ` ${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return ` ${diffInHours} hours ago`;
    } else if (diffInDays < 30) {
      return ` ${diffInDays} days ago`;
    } else if (diffInMonths < 12) {
      return ` ${diffInMonths} months ago`;
    } else {
      return ` ${diffInYears} years ago`;
    }
  };

  const renderBodyContent = (rowData, col, index) => {
    if (col.field == "name") {
      // return rowData.user.name;
    }
    if (col.field === "updatedAt" || col.field === "toDate") {
      return formatRelativeDate(rowData[col.field]);
    }
    if (col.field === "totalPrice") {
      return rowData.totalPrice + " EGP";
    }
    if (col.field === "status") {
      return statusBodyTemplate(rowData);
    }
    return rowData[col.field];
  };

  return (
    <div className="recent-bookings">
      <div className="bg-white">
        <Tooltip target=".export-buttons>button" position="bottom" />

        <DataTable tableStyle={{ minWidth: "50rem" }} filters={filters} onFilter={(e) => setFilters(e.filters)} selectionMode={null} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} ref={dt} removableSort value={products} header={header}>
          <Column style={{ textAlign: "center" }} selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
          {cols.map((col, index) => (
            <Column key={index} style={{ width: "5rem", textAlign: "center" }} body={(rowData) => renderBodyContent(rowData, col, index)} sortable={col.sortable} header={col.header} />
          ))}
        </DataTable>
      </div>
    </div>
  );
}

export default RecentBookings;
