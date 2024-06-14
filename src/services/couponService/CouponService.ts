import { HttpClient } from "../lib/axios/HttpClient"
import { ErrorResponse, GetSearchCouponsVisaRequest, GetSearchCouponsVisaResponse } from "./model/model";
import { ResponseCustom } from "../lib/axios/model/model";
import { COUPONS_VISA_URL } from "../../config/DefaultValues";

export async function searchCoupons(params: GetSearchCouponsVisaRequest): Promise<ResponseCustom<GetSearchCouponsVisaResponse, ErrorResponse> | undefined> {
    let paramsQuery: string[] = [];
    console.log(params);
    Object.entries(params).forEach(([key, value]) => {
        if (value != null && value != undefined)
            paramsQuery.push(key + "=" + value)
    });
    return await HttpClient.get<GetSearchCouponsVisaResponse, ErrorResponse>(COUPONS_VISA_URL + '/visa?' + paramsQuery.join("&"), undefined);
}