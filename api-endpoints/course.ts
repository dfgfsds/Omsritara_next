import axios from "axios";
import ApiUrls from "./ApiUrls";

// CREATE COURSE lEAD API
export const postCourseLead = async (payload: any) => {
    return axios.post(
        `${ApiUrls.courseLeadPost}`, payload
    );
};