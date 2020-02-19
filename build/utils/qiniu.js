const qiniu = require('qiniu');

const accessKey = 'XpdYth1M3lrJoVerI40wTvR_01qBWH9soih-_f-4';
const secretKey = 'fDN28FNMeFOp_MrBiCO4mKVdwztjbI-QZtBNoAeE';
const bucket = 'yingkaixiang';

const options = {
  scope: bucket,
};

const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z0;

const formUploader = new qiniu.form_up.FormUploader(config);

function upload(localFile, key, fileInfo) {
  const putExtra = new qiniu.form_up.PutExtra({
    mimeType: [fileInfo.mimeType],
  });
  formUploader.putFile(uploadToken, key, localFile, putExtra, function(
    respErr,
    respBody,
    respInfo,
  ) {
    if (respErr) {
      throw respErr;
    }
    if (respInfo.statusCode === 200) {
      console.log(respBody);
    } else {
      console.log(respInfo.statusCode);
      console.log(respBody);
    }
  });
}

module.exports = upload;
