import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Select } from "../../components/FormGroup";
import { AddressUrl } from "../../helpers/apiLinks";
import { timedModal } from "../../helpers/SweetAlert";
import useAuth from "../../hooks/useAuth";
import useGetFetch from "../../hooks/useGetFetch";

function AddressCreate() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [options] = useGetFetch(AddressUrl + "/choices/", auth.token);
  const onSubmit = (data: any) => {
    //console.log(data)
    axios.post(AddressUrl + '/', JSON.stringify(data), {
      headers: {
        "Authorization": auth.token,
        "Content-Type": "application/json",
      },
    }).then(() =>{
      timedModal.fire({
        icon: "success",
        title: "Address Successfully Added",
      }).then(() => {
        navigate('/customer/addresses')
      })
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Add New Address</h1>
      <Form onSubmit={onSubmit} submitBtn="Add Address">
        <Input name="name" />
        <Input name="company" rq={false} />
        <Input name="address" />
        <Input name="city" />
        <Input name="post_code" />
        <Select name="region" options={options ? options : []} />
      </Form>
    </div>
  );
}

export default AddressCreate;
