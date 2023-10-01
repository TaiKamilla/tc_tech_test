// create an https service that do 5 retries if the request fails
import https from "https";
import config from "../config/config";

const getLabelById = async (labelId: string, retryCount = 5) => {
  const url = `${config.labelsServiceUrl}/labels/${labelId}`;

  //   do 5 retries if the request fails
  const label = await new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", (err) => {
        console.log("error");
        if (retryCount === 0) {
          reject(err);
        } else {
          setTimeout(() => {
            resolve(getLabelById(labelId, retryCount - 1));
          }, 1000);
        }
      });
  });
  return label; 
};

export default {
  getLabelById,
};
