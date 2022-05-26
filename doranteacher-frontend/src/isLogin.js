import { useCookies } from "react-cookie";

function IsLogin() {
    const [cookies, setCookie, removeCookie] = useCookies(["acessToken"]);
    if (cookies.acessToken === undefined) {
        console.log(cookies.acessToken);
        return false;
    } else {
        return true;
    }
}
// console.log(Cookies.get("accessToken"));
export default IsLogin;
