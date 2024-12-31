import React from "react";
import { Input, Select, TextArea } from "../../Ui/Fields";

function ContactOwner() {
  return (
    <form action="" className="mt-5">
      <div className="row">
        <div className="col-12">
          <Input type={"text"} placeholder={"Name"} />
        </div>
        <div className="col-lg-6">
          <Input type={"email"} placeholder={"Email "} />
        </div>
        <div className="col-lg-6">
          <Input type={"number"} placeholder={"Phone Number"} />
        </div>
        <div className="col-lg-6">
          <Input type={"number"} placeholder={"Number of rooms "} />
        </div>
        <div className="col-lg-4">
          <Input type={"text"} placeholder={"lease Date "} />
        </div>
        {/* <div className="col-lg-2">
          <Select
            options={[
              {
                value: "Month",
                label: "Month",
              },
            ]}
          />
        </div> */}
        <div className="col-12">
          <TextArea placeholder={"Message"} />
        </div>
      </div>
    </form>
  );
}

export default ContactOwner;
