import axios from "axios";

export default interface CommonResponse<T=any> {
    successOrNot: string;
    statusCode: string;
    errorMessage?: string;
    data?: any;
}