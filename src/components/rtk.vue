
```
<template>
  <b-container>
    
    <h2 class="h4 font-weight-black">
      &nbsp; &nbsp;&nbsp; R E A L &nbsp; T I M E &nbsp; K I N E M A T I C
    </h2>


    <br />
    <v-card class="pa-10" outlined shaped elevation="3">
      <v-row>
        <v-row>
          <v-col>
            <h2 class="h6 font-weight-black">
              &nbsp; L A T E S T &nbsp; D R O N E &nbsp; R E T R I E V A L
            </h2>
            <b-form-textarea
              style="font-size: 0.8rem"
              id="textres"
              v-model="response_text1"
              rows="20"
              max-rows="20"
            ></b-form-textarea>
            <br />
            <v-btn
              class="ma-0 white--text"
              color="#5C6BC0"
              block
              raised
              rounded
              elevation="2"
              @click="[(getsnackbar = true), get_request()]"
            >
              G E T &nbsp; I N F O R M A T I O N
            </v-btn>
          </v-col>
          <v-col>
            <h2 class="h6 font-weight-black">
              &nbsp; E D I T &nbsp; & &nbsp; U P D A T E &nbsp; &nbsp;
            </h2>
            <b-form-textarea
              style="font-size: 0.8rem"
              id="cin_con"
              v-model="data_obj.con"
              ref="cin_con"
              placeholder="Enter content (con)"
              rows="20"
              max-rows="20"
            ></b-form-textarea>
            <br />
            <v-btn
              class="ma-0 indigo--text"
              color="#5C6BC0"
              block
              outlined
              raised
              rounded
              elevation="2"
              @click="[cin_print(), (snackbar = true), post_request()]"
            >
              U P D A T E</v-btn
            >
          </v-col>
        </v-row>
        <br />
      </v-row>
    </v-card>
    <br />
    <br />
    <v-card class="pa-10" outlined shaped elevation="2">
      <v-row>
        <b-col>
          <h5>HTTP Request</h5>
          <b-card shadow="always">
            <br />
            {{ data_obj.Create_text }}
            {{ "http://" + data_obj.Platform_addr + "/" + data_obj.Res_Id }}
            <br />
            <br />
            <div>
              <b>Header</b>
              <b-table
                ref="reqtable"
                style="font-size: 0.9rem"
                small
                stacked
                :items="req_items"
                :fields="req_fields"
              >
              </b-table>
              <h5>&nbsp;</h5>
              <b>Body</b>
              <b-form-textarea
                style="font-size: 0.8rem"
                id="textreq"
                v-model="request_text"
                rows="10"
                max-rows="10"
              ></b-form-textarea>
            </div>
          </b-card>
          <br />
        </b-col>
        <br />
        <b-col>
          <h5>HTTP Response</h5>
          <b-card shadow="always">
            <br />
            {{ this.res_status }}
            <br />
            <br />
            <div>
              <b>Header</b>
              <b-table
                ref="restable"
                style="font-size: 0.9rem"
                small
                stacked
                :items="res_items"
                :fields="res_fields"
              >
              </b-table>
              <b>Body</b>
              <b-form-textarea
                style="font-size: 0.8rem"
                id="textres"
                v-model="response_text"
                rows="10"
                max-rows="10"
              ></b-form-textarea>
            </div>
          </b-card>
        </b-col>
        <br />
      </v-row>
    </v-card>
    <v-snackbar
      :timeout="2000"
      color="#3949AB"
      variant="outlined"
      v-model="snackbar"
      class="ma-2"
      rounded="pill"
      min-width="0"
    >
      &nbsp; {{ text }} !
    </v-snackbar>

        <v-snackbar
      :timeout="2000"
      color="#3949AB"
      variant="outlined"
      v-model="getsnackbar"
      class="ma-2"
      rounded="pill"
      min-width="0"
    >
      &nbsp; {{ gettext }} !
    </v-snackbar>
  </b-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {

      countcon: "",

      testString: "",
      testArray: [],
      testArray1: [],
      dataA: [],

      snackbar: false,
      getsnackbar: false,
      text: `Drone Information Updated`,
      gettext: `Drone Information Retrieved`,

      response_text1: "",

      query_Params: "/la",
      selected: "cin",
      res_name: "",
      data_obj1: {
        Platform_addr: "127.0.0.1:7579",
        //Platform_addr: "http://gcs.iotocean.org:7579",
        Res_Id: "Mobius/KETI_RTK/DroneList",
        //Res_Id: "Mobius/aeketi/cnt",
        X_M2M_RI: "12345",
        X_M2M_Origin: "SOrigin",
        Accept: "application/json",
        Retrieve_text: "GET",
      },
      data_obj: {
        Create_text: "POST",
        Platform_addr: "127.0.0.1:7579",
        //Platform_addr: "http://gcs.iotocean.org:7579",
        Res_Id: "Mobius/KETI_RTK/DroneList",
        //Res_Id: "Mobius/aeketi/cnt",
        X_M2M_RI: "12345",
        X_M2M_Origin: "SOrigin",
        Accept: "application/json",
        rn: "",
        lbl: "",
        mni: "",
        mbs: "",
        ty: "",
        op: "",
        api: "",
        rr: "",
        con: [
          {
            name: "NeonAb",
            gcs: "MUV_Neon",
            system_id: 1,
          },
          {
            name: "NeonAb",
            gcs: "MUV_Neon",
            system_id: 13,
          },
          {
            name: "NeonAb",
            gcs: "MUV_Neon",
            system_id: 14,
          },
        ],
        nu: "",
        enc: "",
      },
      req_fields: [
        { key: "X-M2M-RI", class: "text-center" },
        { key: "X-M2M-Origin", class: "text-center" },
        { key: "Content-Type", class: "text-center" },
        { key: "Accept", class: "text-center" },
      ],
      req_items: [
        { "X-M2M-RI": "", "X-M2M-Origin": "", "Content-Type": "", Accept: "" },
      ],
      res_fields: [
        { key: "X-M2M-RI", class: "text-center" },
        { key: "X-M2M-RSC", class: "text-center" },
        { key: "X-M2M-RVI", class: "text-center" },
        { key: "Content-Length", class: "text-center" },
        { key: "Content-Type", class: "text-center" },
      ],
      res_items: [
        {
          "X-M2M-RI": "",
          "X-M2M-RSC": "",
          "X-M2M-RVI": "",
          "Content-Length": "",
          "Content-Type": "",
        },
      ],
      headers_text: "",
      request_text: "",

      response_text: "",

      res_mess: "",
      res_errmess: "",
      res_status: "",
    };
  },
  methods: {
    cin_form() {
      this.selected = "cin";
    },
    request_header_change(obj) {
      //console.log(obj);
      this.req_items[0]["X-M2M-RI"] = obj["X-M2M-RI"];
      this.req_items[0]["X-M2M-Origin"] = obj["X-M2M-Origin"];
      this.req_items[0]["Content-Type"] = obj["Content-Type"];
      this.req_items[0]["Accept"] = obj["Accept"];
      this.$refs.reqtable.refresh();
    },
    response_header_change(obj) {
      //console.log(obj);
      this.res_items[0]["X-M2M-RI"] = obj["X-M2M-RI"];
      this.res_items[0]["X-M2M-RSC"] = obj["X-M2M-RSC"];
      this.res_items[0]["X-M2M-RVI"] = obj["X-M2M-RVI"];
      this.res_items[0]["Content-Length"] = obj["Content-Length"];
      this.res_items[0]["Content-Type"] = obj["Content-Type"];
      this.$refs.restable.refresh();
    },
    cin_print() {
      let cin_obj = {};
      cin_obj["m2m:cin"] = {};
      if (this.data_obj.rn != "") {
        cin_obj["m2m:cin"].rn = this.data_obj.rn;
      }
      if (this.data_obj.lbl != "") {
        cin_obj["m2m:cin"].lbl = JSON.parse(this.data_obj.lbl);
      }
      if (this.data_obj.con != "") {
        cin_obj["m2m:cin"].con = this.data_obj.con;
      }
      this.data_obj["Content-Type"] = "applicaton/json;ty=4";
      this.data_obj["body"] = cin_obj;
      let headers = {};
      headers["X-M2M-RI"] = this.data_obj.X_M2M_RI;
      headers["X-M2M-Origin"] = this.data_obj.X_M2M_Origin;
      headers["Accept"] = this.data_obj.Accept;
      headers["Content-Type"] = this.data_obj["Content-Type"];
      this.req_display_obj = cin_obj;
      this.request_header_change(headers);
      return (this.request_text = JSON.stringify(
        this.req_display_obj,
        undefined,
        2
      ));
    },
    post_request() {
      let url =
        "http://" + this.data_obj.Platform_addr + "/" + this.data_obj.Res_Id;
      const headers = {};
      headers["X-M2M-RI"] = this.data_obj.X_M2M_RI;
      headers["X-M2M-Origin"] = this.data_obj.X_M2M_Origin;
      headers["Content-Type"] = this.data_obj["Content-Type"];
      headers["Accept"] = this.data_obj.Accept;
      let body = this.data_obj.body;
      axios
        .post(url, body, { headers })
        .then((response) => {
          this.res_mess = response.data;
          this.res_status = response.status;
          let headers = {};
          headers["X-M2M-RI"] = response.headers["x-m2m-ri"];
          headers["X-M2M-RSC"] = response.headers["x-m2m-rsc"];
          headers["X-M2M-RVI"] = response.headers["x-m2m-rvi"];
          headers["Content-Length"] = response.headers["content-length"];
          headers["Content-Type"] = response.headers["content-type"];
          this.response_header_change(headers);
          return (this.response_text = JSON.stringify(
            this.res_mess,
            undefined,
            2
          ));
        })
        .catch((error) => {
          this.res_errmess = error.response.data;
          if (error.response.status === 409) {
            this.res_status = error.response.status;
          } else if (error.response.status === 404) {
            this.res_status = error.response.status;
          }
          let headers = {};
          headers["X-M2M-RI"] = error.response.headers["x-m2m-ri"];
          headers["X-M2M-RSC"] = error.response.headers["x-m2m-rsc"];
          headers["X-M2M-RVI"] = error.response.headers["x-m2m-rvi"];
          headers["Content-Length"] = error.response.headers["content-length"];
          headers["Content-Type"] = error.response.headers["content-type"];
          this.response_header_change(headers);
          return (this.response_text = this.res_errmess);
        });
    },
    request_header_change1(obj) {
      //console.log(obj);
      this.req_items[0]["X-M2M-RI"] = obj["X-M2M-RI"];
      this.req_items[0]["X-M2M-Origin"] = obj["X-M2M-Origin"];
      this.req_items[0]["Accept"] = obj["Accept"];
      this.$refs.reqtable.refresh();
    },
    response_header_change1(obj) {
      //console.log(obj);
      this.res_items[0]["X-M2M-RI"] = obj["X-M2M-RI"];
      this.res_items[0]["X-M2M-RSC"] = obj["X-M2M-RSC"];
      this.res_items[0]["X-M2M-RVI"] = obj["X-M2M-RVI"];
      this.res_items[0]["Content-Length"] = obj["Content-Length"];
      this.res_items[0]["Content-Type"] = obj["Content-Type"];
      this.$refs.restable.refresh();
    },
    get_request() {
      let url =
        "http://" +
        this.data_obj1.Platform_addr +
        "/" +
        this.data_obj1.Res_Id +
        this.query_Params;
      const headers = {};
      headers["X-M2M-RI"] = this.data_obj1.X_M2M_RI;
      headers["X-M2M-Origin"] = this.data_obj1.X_M2M_Origin;
      headers["Accept"] = this.data_obj1.Accept;
      this.request_header_change1(headers);
      axios
        .get(url, { headers })
        .then((response) => {
          this.res_mess = response.data;
          this.res_status = response.status;
          let headers = {};
          headers["X-M2M-RI"] = response.headers["x-m2m-ri"];
          headers["X-M2M-RSC"] = response.headers["x-m2m-rsc"];
          headers["X-M2M-RVI"] = response.headers["x-m2m-rvi"];
          headers["Content-Length"] = response.headers["content-length"];
          headers["Content-Type"] = response.headers["content-type"];
          this.response_header_change(headers);
          return (this.response_text1 = JSON.stringify(
            this.res_mess,
            undefined,
            2
          ));
        })
        .catch((error) => {
          this.res_errmess = error.response.data;
          if (error.response.status === 409) {
            this.res_status = error.response.status;
          } else if (error.response.status === 404) {
            this.res_status = error.response.status;
          }
          let headers = {};
          headers["X-M2M-RI"] = error.response.headers["x-m2m-ri"];
          headers["X-M2M-RSC"] = error.response.headers["x-m2m-rsc"];
          headers["X-M2M-RVI"] = error.response.headers["x-m2m-rvi"];
          headers["Content-Length"] = error.response.headers["content-length"];
          headers["Content-Type"] = error.response.headers["content-type"];
          this.response_header_change(headers);
          return (this.response_text1 = this.res_errmess);
        });




    console.log(">>>>>> new  type of response_text1 is: " + typeof this.response_text1);
    console.log(">>>>>> new  type of testArray is: " + typeof this.testArray);  
    console.log(">>>>>> data_obj 's con: " + this.data_obj.con);  
    console.log(">>>>>> yay data_obj.con.name: " + this.data_obj.con.name);  

    this.dataA = this.data_obj.con;
    console.log(">>>>>>yay1: " + this.data_obj[1]);  
    
    console.log(this.testArray);

    //this.countcon = this.data_obj.con ;


    //console.log("YAY:" + this.data_obj.con.split("name").length - 1);


    },



  },
};
</script>
