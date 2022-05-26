import { Cookies, useCookies } from "react-cookie";

const isLogin = () => !!Cookies.get("accessToken");
export default isLogin;
