//const hostApi = "http://localhost:8000/api";
const hostApi = "http://localhost:8000/api";
const hostAuth = "http://localhost:8000/auth";
//const hostApi = "https://foodshop-api.antoninislam.com/api";

export const homePageUrl: string = `${hostApi}/pageinfo/defaultPage`;
export const CategoryUrl: string = `${hostApi}/categories`;
export const ProductUrl: string = `${hostApi}/products`;
export const CustomerUrl: string = `${hostApi}/customers`;
export const AddressUrl: string = `${hostApi}/addresses`;
export const CustomerAddressesUrl: string = `${hostApi}/customers/addresses/`;
export const ProductQueryUrl: string = `${hostApi}/products/query`;
export const ProductFilterUrl: string = `${hostApi}/products/custom/filter`;
export const registerUrl: string = `${hostApi}/register`;
export const loginUrl: string = `${hostAuth}/jwt/create/`;
export const userDetailUrl: string = `${hostAuth}/users/me/`;
export const logoutUrl: string = `${hostApi}/logout`;
