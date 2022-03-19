import axios from "axios";
import { Form, Input, Select } from "../../components/FormGroup";
import { AddressUrl } from "../../helpers/apiLinks";
import useAuth from "../../hooks/useAuth";
import useGetFetch from "../../hooks/useGetFetch";

function AddressCreate() {
  const [options] = useGetFetch(AddressUrl + "/choices/");
  const auth = useAuth();
  const onSubmit = (data: any) => {
    //console.log(data)
    axios.post(AddressUrl + '/', JSON.stringify(data), {
      headers: {
        Authorization: auth.token,
        "Content-Type": "application/json",
      },
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
