import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Select } from "../../components/FormGroup";
import { AddressUrl } from "../../helpers/apiLinks";
import { timedModal } from "../../helpers/SweetAlert";
import useAuth from "../../hooks/useAuth";
import useGetFetch from "../../hooks/useGetFetch";

function AddressEdit() {
  const { id } = useParams();
  const auth = useAuth();
  const navigate = useNavigate()
  const [items] = useGetFetch(AddressUrl + `/${id}/`, auth.token);
  const [options] = useGetFetch(AddressUrl + "/choices/", auth.token);

  const onSubmit = (data: any) => {
    //console.log(data)
    axios
      .patch(AddressUrl + `/${id}/`, JSON.stringify(data), {
        headers: {
          "Authorization": auth.token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        timedModal
          .fire({
            icon: "success",
            title: "Address Successfully Edited",
          })
          .then(() => {
            navigate("/customer/addresses");
          });
      });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Edit Address</h1>
      {items && (
        <Form
          onSubmit={onSubmit}
          defaultValues={{
            name: items.name,
            company: items.company,
            address: items.address,
            city: items.city,
            post_code: items.post_code,
            region: items.region,
          }}
          submitBtn="Edit Address"
        >
          <Input name="name" />
          <Input name="company" rq={false} />
          <Input name="address" />
          <Input name="city" />
          <Input name="post_code" />
          <Select name="region" defaultValue={1} options={options ? options : []} />
        </Form>
      )}
    </div>
  );
}

export default AddressEdit;
